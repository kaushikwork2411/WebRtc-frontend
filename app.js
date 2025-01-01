const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://192.168.1.9:25689/signalingHub", {
        transport: signalR.HttpTransportType.WebSockets,
        skipNegotiation: true
    }).configureLogging(signalR.LogLevel.Information)
    .build();

// const connection = new signalR.HubConnectionBuilder()
//     .withUrl("https://localhost:7004/signalingHub", {
//         transport: signalR.HttpTransportType.WebSockets,
//         skipNegotiation: true
//     }).configureLogging(signalR.LogLevel.Information)
//     .build();


const configuration = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun.l.google.com:5349" },
    { urls: "stun:stun1.l.google.com:3478" },
    { urls: "stun:stun1.l.google.com:5349" },
    { urls: "stun:stun2.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:5349" },
    { urls: "stun:stun3.l.google.com:3478" },
    { urls: "stun:stun3.l.google.com:5349" },
    { urls: "stun:stun4.l.google.com:19302" },
    { urls: "stun:stun4.l.google.com:5349" }, { urls: "stun:stun.1und1.de:3478" },
    { urls: "stun:stun.gmx.net:3478" },
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:19302" },
    { urls: "stun:stun3.l.google.com:19302" },
    { urls: "stun:stun4.l.google.com:19302" },
    { urls: "stun:23.21.150.121:3478" },
    { urls: "stun:iphone-stun.strato-iphone.de:3478" },
    { urls: "stun:numb.viagenie.ca:3478" },
    { urls: "stun:stun.12connect.com:3478" },
    { urls: "stun:stun.12voip.com:3478" },
    { urls: "stun:stun.1und1.de:3478" },
    { urls: "stun:stun.2talk.co.nz:3478" },
    { urls: "stun:stun.2talk.com:3478" },
    { urls: "stun:stun.3clogic.com:3478" },
    { urls: "stun:stun.3cx.com:3478" },
    { urls: "stun:stun.a-mm.tv:3478" },
    { urls: "stun:stun.aa.net.uk:3478" },
    { urls: "stun:stun.acrobits.cz:3478" },
    { urls: "stun:stun.actionvoip.com:3478" },
    { urls: "stun:stun.advfn.com:3478" },
    { urls: "stun:stun.aeta-audio.com:3478" },
    { urls: "stun:stun.aeta.com:3478" },
    { urls: "stun:stun.altar.com.pl:3478" },
    { urls: "stun:stun.annatel.net:3478" },
    { urls: "stun:stun.antisip.com:3478" },
    { urls: "stun:stun.arbuz.ru:3478" },
    { urls: "stun:stun.avigora.fr:3478" },
    { urls: "stun:stun.awa-shima.com:3478" },
    { urls: "stun:stun.b2b2c.ca:3478" },
    { urls: "stun:stun.bahnhof.net:3478" },
    { urls: "stun:stun.barracuda.com:3478" },
    { urls: "stun:stun.bluesip.net:3478" },
    { urls: "stun:stun.bmwgs.cz:3478" },
    { urls: "stun:stun.botonakis.com:3478" },
    { urls: "stun:stun.budgetsip.com:3478" },
    { urls: "stun:stun.cablenet-as.net:3478" },
    { urls: "stun:stun.callromania.ro:3478" },
    { urls: "stun:stun.callwithus.com:3478" },
    { urls: "stun:stun.chathelp.ru:3478" },
    { urls: "stun:stun.cheapvoip.com:3478" },
    { urls: "stun:stun.ciktel.com:3478" },
    { urls: "stun:stun.cloopen.com:3478" },
    { urls: "stun:stun.comfi.com:3478" },
    { urls: "stun:stun.commpeak.com:3478" },
    { urls: "stun:stun.comtube.com:3478" },
    { urls: "stun:stun.comtube.ru:3478" },
    { urls: "stun:stun.cope.es:3478" },
    { urls: "stun:stun.counterpath.com:3478" },
    { urls: "stun:stun.counterpath.net:3478" },
    { urls: "stun:stun.datamanagement.it:3478" },
    { urls: "stun:stun.dcalling.de:3478" },
    { urls: "stun:stun.demos.ru:3478" },
    { urls: "stun:stun.develz.org:3478" },
    { urls: "stun:stun.dingaling.ca:3478" },
    { urls: "stun:stun.doublerobotics.com:3478" },
    { urls: "stun:stun.dus.net:3478" },
    { urls: "stun:stun.easycall.pl:3478" },
    { urls: "stun:stun.easyvoip.com:3478" },
    { urls: "stun:stun.ekiga.net:3478" },
    { urls: "stun:stun.epygi.com:3478" },
    { urls: "stun:stun.etoilediese.fr:3478" },
    { urls: "stun:stun.faktortel.com.au:3478" },
    { urls: "stun:stun.freecall.com:3478" },
    { urls: "stun:stun.freeswitch.org:3478" },
    { urls: "stun:stun.freevoipdeal.com:3478" },
    { urls: "stun:stun.gmx.de:3478" },
    { urls: "stun:stun.gmx.net:3478" },
    { urls: "stun:stun.gradwell.com:3478" },
    { urls: "stun:stun.halonet.pl:3478" },
    { urls: "stun:stun.hellonanu.com:3478" },
    { urls: "stun:stun.hoiio.com:3478" },
    { urls: "stun:stun.hosteurope.de:3478" },
    { urls: "stun:stun.ideasip.com:3478" },
    { urls: "stun:stun.infra.net:3478" },
    { urls: "stun:stun.internetcalls.com:3478" },
    { urls: "stun:stun.intervoip.com:3478" },
    { urls: "stun:stun.ipcomms.net:3478" },
    { urls: "stun:stun.ipfire.org:3478" },
    { urls: "stun:stun.ippi.fr:3478" },
    { urls: "stun:stun.ipshka.com:3478" },
    { urls: "stun:stun.irian.at:3478" },
    { urls: "stun:stun.it1.hr:3478" },
    { urls: "stun:stun.ivao.aero:3478" },
    { urls: "stun:stun.jumblo.com:3478" },
    { urls: "stun:stun.justvoip.com:3478" },
    { urls: "stun:stun.kanet.ru:3478" },
    { urls: "stun:stun.kiwilink.co.nz:3478" },
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun.linea7.net:3478" },
    { urls: "stun:stun.linphone.org:3478" },
    { urls: "stun:stun.liveo.fr:3478" },
    { urls: "stun:stun.lowratevoip.com:3478" },
    { urls: "stun:stun.lugosoft.com:3478" },
    { urls: "stun:stun.lundimatin.fr:3478" },
    { urls: "stun:stun.magnet.ie:3478" },
    { urls: "stun:stun.mgn.ru:3478" },
    { urls: "stun:stun.mit.de:3478" },
    { urls: "stun:stun.mitake.com.tw:3478" },
    { urls: "stun:stun.miwifi.com:3478" },
    { urls: "stun:stun.modulus.gr:3478" },
    { urls: "stun:stun.myvoiptraffic.com:3478" },
    { urls: "stun:stun.mywatson.it:3478" },
    { urls: "stun:stun.nas.net:3478" },
    { urls: "stun:stun.neotel.co.za:3478" },
    { urls: "stun:stun.netappel.com:3478" },
    { urls: "stun:stun.netgsm.com.tr:3478" },
    { urls: "stun:stun.nfon.net:3478" },
    { urls: "stun:stun.noblogs.org:3478" },
    { urls: "stun:stun.noc.ams-ix.net:3478" },
    { urls: "stun:stun.nonoh.net:3478" },
    { urls: "stun:stun.nottingham.ac.uk:3478" },
    { urls: "stun:stun.nova.is:3478" },
    { urls: "stun:stun.on.net.mk:3478" },
    { urls: "stun:stun.ooma.com:3478" },
    { urls: "stun:stun.ooonet.ru:3478" },
    { urls: "stun:stun.oriontelekom.rs:3478" },
    { urls: "stun:stun.outland-net.de:3478" },
    { urls: "stun:stun.ozekiphone.com:3478" },
    { urls: "stun:stun.personal-voip.de:3478" },
    { urls: "stun:stun.phone.com:3478" },
    { urls: "stun:stun.pjsip.org:3478" },
    { urls: "stun:stun.poivy.com:3478" },
    { urls: "stun:stun.powerpbx.org:3478" },
    { urls: "stun:stun.powervoip.com:3478" },
    { urls: "stun:stun.ppdi.com:3478" },
    { urls: "stun:stun.qq.com:3478" },
    { urls: "stun:stun.rackco.com:3478" },
    { urls: "stun:stun.rapidnet.de:3478" },
    { urls: "stun:stun.rb-net.com:3478" },
    { urls: "stun:stun.rixtelecom.se:3478" },
    { urls: "stun:stun.rockenstein.de:3478" },
    { urls: "stun:stun.rolmail.net:3478" },
    { urls: "stun:stun.rynga.com:3478" },
    { urls: "stun:stun.schlund.de:3478" },
    { urls: "stun:stun.services.mozilla.com:3478" },
    { urls: "stun:stun.sigmavoip.com:3478" },
    { urls: "stun:stun.sip.us:3478" },
    { urls: "stun:stun.sipdiscount.com:3478" },
    { urls: "stun:stun.sipgate.net:10000" },
    { urls: "stun:stun.sipgate.net:3478" },
    { urls: "stun:stun.siplogin.de:3478" },
    { urls: "stun:stun.sipnet.net:3478" },
    { urls: "stun:stun.sipnet.ru:3478" },
    { urls: "stun:stun.siportal.it:3478" },
    { urls: "stun:stun.sippeer.dk:3478" },
    { urls: "stun:stun.siptraffic.com:3478" },
    { urls: "stun:stun.skylink.ru:3478" },
    { urls: "stun:stun.sma.de:3478" },
    { urls: "stun:stun.smartvoip.com:3478" },
    { urls: "stun:stun.smsdiscount.com:3478" },
    { urls: "stun:stun.snafu.de:3478" },
    { urls: "stun:stun.softjoys.com:3478" },
    { urls: "stun:stun.solcon.nl:3478" },
    { urls: "stun:stun.solnet.ch:3478" },
    { urls: "stun:stun.sonetel.com:3478" },
    { urls: "stun:stun.sonetel.net:3478" },
    { urls: "stun:stun.sovtest.ru:3478" },
    { urls: "stun:stun.speedy.com.ar:3478" },
    { urls: "stun:stun.spokn.com:3478" },
    { urls: "stun:stun.srce.hr:3478" },
    { urls: "stun:stun.ssl7.net:3478" },
    { urls: "stun:stun.stunprotocol.org:3478" },
    { urls: "stun:stun.symform.com:3478" },
    { urls: "stun:stun.symplicity.com:3478" },
    { urls: "stun:stun.t-online.de:3478" },
    { urls: "stun:stun.tagan.ru:3478" },
    { urls: "stun:stun.teachercreated.com:3478" },
    { urls: "stun:stun.tel.lu:3478" },
    { urls: "stun:stun.telbo.com:3478" },
    { urls: "stun:stun.telefacil.com:3478" },
    { urls: "stun:stun.tng.de:3478" },
    { urls: "stun:stun.twt.it:3478" },
    { urls: "stun:stun.u-blox.com:3478" },
    { urls: "stun:stun.ucsb.edu:3478" },
    { urls: "stun:stun.ucw.cz:3478" },
    { urls: "stun:stun.uls.co.za:3478" },
    { urls: "stun:stun.unseen.is:3478" },
    { urls: "stun:stun.usfamily.net:3478" },
    { urls: "stun:stun.veoh.com:3478" },
    { urls: "stun:stun.vidyo.com:3478" },
    { urls: "stun:stun.vipgroup.net:3478" },
    { urls: "stun:stun.viva.gr:3478" },
    { urls: "stun:stun.vivox.com:3478" },
    { urls: "stun:stun.vline.com:3478" },
    { urls: "stun:stun.vo.lu:3478" },
    { urls: "stun:stun.vodafone.ro:3478" },
    { urls: "stun:stun.voicetrading.com:3478" },
    { urls: "stun:stun.voip.aebc.com:3478" },
    { urls: "stun:stun.voip.blackberry.com:3478" },
    { urls: "stun:stun.voip.eutelia.it:3478" },
    { urls: "stun:stun.voiparound.com:3478" },
    { urls: "stun:stun.voipblast.com:3478" },
    { urls: "stun:stun.voipbuster.com:3478" },
    { urls: "stun:stun.voipbusterpro.com:3478" },
    { urls: "stun:stun.voipcheap.co.uk:3478" },
    { urls: "stun:stun.voipcheap.com:3478" },
    { urls: "stun:stun.voipfibre.com:3478" },
    { urls: "stun:stun.voipgain.com:3478" },
    { urls: "stun:stun.voipgate.com:3478" },
    { urls: "stun:stun.voipinfocenter.com:3478" },
    { urls: "stun:stun.voipplanet.nl:3478" },
    { urls: "stun:stun.voippro.com:3478" },
    { urls: "stun:stun.voipraider.com:3478" },
    { urls: "stun:stun.voipstunt.com:3478" },
    { urls: "stun:stun.voipwise.com:3478" },
    { urls: "stun:stun.voipzoom.com:3478" },
    { urls: "stun:stun.vopium.com:3478" },
    { urls: "stun:stun.voxox.com:3478" },
    { urls: "stun:stun.voys.nl:3478" },
    { urls: "stun:stun.voztele.com:3478" },
    { urls: "stun:stun.vyke.com:3478" },
    { urls: "stun:stun.webcalldirect.com:3478" },
    { urls: "stun:stun.whoi.edu:3478" },]
};
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
let localStream;
let peerConnection;

// SignalR Handlers
connection.on("ReceiveOffer", async (fromConnectionId, offer) => {
    try {
        peerConnection = createPeerConnection(fromConnectionId);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(offer)));

        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);

        await connection.invoke("SendAnswer", fromConnectionId, JSON.stringify(answer));
    } catch (error) {
        showError("Error handling the offer: " + error.message);
    }
});

connection.on("ReceiveAnswer", async (fromConnectionId, answer) => {
    try {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(JSON.parse(answer)));
    } catch (error) {
        showError("Error handling the answer: " + error.message);
    }
});

connection.on("ReceiveIceCandidate", async (fromConnectionId, candidate) => {
    try {
        await peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)));
    } catch (error) {
        showError("Error handling ICE candidate: " + error.message);
    }
});

// Permission Check and Initialization
async function checkAndRequestPermissions() {
    try {
        const permissions = await navigator.permissions.query({ name: "camera" });
        if (permissions.state === "denied") throw new Error("Permissions denied.");

        return await requestPermissions();
    } catch (error) {
        return false;
    }
}

async function requestPermissions() {
    try {
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        return true;
    } catch {
        return false;
    }
}

async function initializeLocalStream() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
        showError("Error initializing local stream: " + error.message);
    }
}

// Create Peer Connection
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

    return pc;
}

// Start Call
async function startCall() {
    try {
        if (!localStream) {
            const hasPermission = await checkAndRequestPermissions();
            if (!hasPermission) throw new Error("Permissions not granted.");
            await initializeLocalStream();
        }
        // Wait for the connection to be established
        if (connection.state !== signalR.HubConnectionState.Connected) {
            showError("SignalR connection not established. Attempting to reconnect...");
            await connection.start(); // Wait for the connection to be established
        }

        peerConnection = createPeerConnection(connection.connectionId);
        localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        await connection.invoke("SendOffer", connection.connectionId, JSON.stringify(offer));
    } catch (error) {
        showError(error.message);
    }
}

// Error Display
function showError(message) {
    const errorElement = document.getElementById("errorMessage");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Start SignalR Connection
connection.start().then(() => {
    console.log("SignalR connection established.");
    initializeLocalStream();
}).catch(error => {
    showError("Error establishing SignalR connection: " + error);
});

// document.getElementById("startCall").addEventListener("click", startCall);

document.getElementById("startCall").addEventListener("click", async () => {
    if (connection.state === signalR.HubConnectionState.Connected) {
        await startCall();
    } else {
        connection.start()
            .then(() => {
                console.log("SignalR connection established.");
                startCall(); // Start the call after the connection is fully established
            })
            .catch(error => {
                showError("Error starting SignalR connection: " + error);
            });
        showError("Connection not ready. Wait until SignalR connection is established.");
    }
});