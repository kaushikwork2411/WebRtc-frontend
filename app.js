const connection = new signalR.HubConnectionBuilder()
.withUrl("http://localhost:5000/signaling")
.build();

const configuration = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
let localStream;
let peerConnection;

connection.on("ReceiveOffer", async (fromConnectionId, offer) => {
peerConnection = createPeerConnection(fromConnectionId);
await peerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(offer)));
const answer = await peerConnection.createAnswer();
await peerConnection.setLocalDescription(answer);
connection.invoke("SendAnswer", fromConnectionId, JSON.stringify(answer));
});

connection.on("ReceiveAnswer", async (fromConnectionId, answer) => {
await peerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(answer)));
});

connection.on("ReceiveIceCandidate", async (fromConnectionId, candidate) => {
await peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)));
});

async function startLocalStream() {
localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
localVideo.srcObject = localStream;
}

function createPeerConnection(remoteConnectionId) {
const pc = new RTCPeerConnection(configuration);

pc.onicecandidate = ({ candidate }) => {
    if (candidate) {
        connection.invoke("SendIceCandidate", remoteConnectionId, JSON.stringify(candidate));
    }
};

pc.ontrack = (event) => {
    remoteVideo.srcObject = event.streams[0];
};

localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
return pc;
}

async function startCall() {
peerConnection = createPeerConnection("remote-peer-id"); // Replace with actual remote peer ID
const offer = await peerConnection.createOffer();
await peerConnection.setLocalDescription(offer);
connection.invoke("SendOffer", "remote-peer-id", JSON.stringify(offer)); // Replace with actual remote peer ID
}

// Start connection and local stream
connection.start().then(() => startLocalStream());