const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://192.168.1.9:25689/signalingHub", {
        transport: signalR.HttpTransportType.WebSockets,
        skipNegotiation: true
    }).configureLogging(signalR.LogLevel.Information)
    .build();

// const connection = new signalR.HubConnectionBuilder()
// .withUrl("https://localhost:7004/signalingHub",{
//     transport: signalR.HttpTransportType.WebSockets, 
//     skipNegotiation: true
// })
// .build();


const configuration = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
let localStream;
let peerConnection;

connection.on("ReceiveOffer", async (fromConnectionId, offer) => {
    try {
        console.log("offer recived");
        peerConnection = createPeerConnection(fromConnectionId);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(offer)));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        console.log(JSON.stringify(answer));
        connection.invoke("SendAnswer", fromConnectionId, JSON.stringify(answer));
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }

});

connection.on("ReceiveAnswer", async (fromConnectionId, answer) => {
    try {
        console.log(JSON.stringify(candidate));
        await peerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(answer)));
        console.log("ReceiveAnswer");
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }

});

connection.on("ReceiveIceCandidate", async (fromConnectionId, candidate) => {
    try {
        console.log(JSON.stringify(candidate));
        await peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)));
        console.log("ReceiveIceCandidate");
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }


});

async function startLocalStream() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }

}

function createPeerConnection(remoteConnectionId) {
    const pc = new RTCPeerConnection(configuration);

    pc.onicecandidate = ({ candidate }) => {
        try {
            if (candidate) {
                console.log(JSON.stringify(candidate));
                connection.invoke("SendIceCandidate", remoteConnectionId, JSON.stringify(candidate));
            }
        } catch (error) {
            showError("Error handling the offer: " + error.message);
        }

    };

    pc.ontrack = (event) => {
        try {
            remoteVideo.srcObject = event.streams[0];
            localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
            return pc;
        } catch (error) {
            showError("Error handling the offer: " + error.message);
        }

    };


}

async function startCall() {
    try {
        console.log("call start....");
        peerConnection = createPeerConnection("remote-peer-id"); // Replace with actual remote peer ID
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        connection.invoke("SendOffer", "remote-peer-id", JSON.stringify(offer)); // Replace with actual remote peer ID
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }

}

// Start connection and local stream
connection.start().then(() => {
    try {
        startLocalStream()
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }


});

document.getElementById("startCall").addEventListener("click", startCall);

function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';  // Show the error message div
}