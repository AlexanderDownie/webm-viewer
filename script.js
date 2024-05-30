document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("file");
    const videoElement = document.getElementById("video");
    const buttonElement = document.getElementById("select-file");

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file && file.type === "video/webm") {
            const fileURL = URL.createObjectURL(file);
            videoElement.src = fileURL;
            videoElement.play();
        } else {
            alert("Please select a valid WebM file.");
        }
    });

    buttonElement.addEventListener("click", function() {
        fileInput.click();
    });
});
