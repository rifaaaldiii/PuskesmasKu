document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");
    const nextButtons = document.querySelectorAll(".next");
    const skipButtons = document.querySelectorAll(".skip");
    let currentIndex = 0;
  
    // Function to show the current container and hide others
    function showContainer(index) {
      containers.forEach((container, i) => {
        if (i === index) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    }
  
    // Show the first container initially
    showContainer(currentIndex);
  
    // Add click event listeners to "Selanjutnya" buttons
    nextButtons.forEach((nextButton) => {
      nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentIndex < containers.length - 1) {
          currentIndex++;
          showContainer(currentIndex);
        }
      });
    });
  
    // Add click event listeners to "Lewati" buttons
    skipButtons.forEach((skipButton) => {
      skipButton.addEventListener("click", function (e) {
        e.preventDefault();
        // Skip to the last container
        currentIndex = containers.length - 1;
        showContainer(currentIndex);
      });
    });
  });
  