document.addEventListener("DOMContentLoaded", function () {
    // 🎉 Collage Button Functionality
    const collageButton = document.getElementById("collage-btn");

    if (collageButton) {
        collageButton.addEventListener("click", function () {
            collageButton.style.transform = "scale(0.9)";
            setTimeout(() => {
                window.location.href = "collage.html";
            }, 300);
        });

        // Button Hover Effects
        collageButton.addEventListener("mouseover", function () {
            collageButton.style.backgroundColor = "#ff00ff"; // Magenta glow
            collageButton.style.boxShadow = "0 0 15px #ff00ff";
        });

        collageButton.addEventListener("mouseleave", function () {
            collageButton.style.backgroundColor = "black";
            collageButton.style.boxShadow = "none";
        });
    }
});
