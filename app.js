(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the download button
    document.getElementById("downloadButton").addEventListener("click", function() {
        // Update the path to your PDF file
        var pdfPath = './img/tushar.pdf';

        var link = document.createElement('a');
        link.href = pdfPath;
        link.download = "Tushar_Resume.pdf"; // Rename the file if needed
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
    });
});