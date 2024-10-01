var video = document.getElementById("video");

function on_cam_success(stream) {
    video.srcObject = stream; // Correcting the typo (vudei -> video)
}

function on_cam_error(err) {
    alert("Error: " + err.message); // Correct error message format
}

var constraints = { audio: false, video: true }; // Correct spelling (constrains -> constraints)

navigator.mediaDevices.getUserMedia(constraints)
    .then(on_cam_success)
    .catch(on_cam_error); // Correct function name (on_cam_rr -> on_cam_error)

function capture() {
    var c = document.getElementById("canvas");
    c.width = video.videoWidth; // Use videoWidth instead of video.width
    c.height = video.videoHeight; // Use videoHeight instead of video.height
    var ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, c.width, c.height); // Use canvas size dynamically
}
