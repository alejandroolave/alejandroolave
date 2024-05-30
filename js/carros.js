document.addEventListener("DOMContentLoaded", function() {
    const downloadButtons = document.querySelectorAll(".download-btn");
    downloadButtons.forEach(button => {
        button.addEventListener("click", function() {
            const imageSrc = this.parentElement.previousElementSibling.getAttribute("src");
            const imageName = getImageName(imageSrc);
            downloadImage(imageSrc, imageName);
        });
    });

    function getImageName(imageSrc) {
        const index = imageSrc.lastIndexOf("/") + 1;
        return imageSrc.substr(index);
    }

    function downloadImage(imageSrc, imageName) {
        const link = document.createElement("a");
        link.href = imageSrc;
        link.download = imageName;
        link.click();
    }
});
