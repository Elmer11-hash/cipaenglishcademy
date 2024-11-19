// Function to toggle the menu and hamburger icon
function toggleMenu() {
  // Toggle the 'show' class for the menu to show/hide it
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');

  // Toggle the 'active' class for the hamburger icon to change its appearance
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');

  // Toggle the 'X' transformation for the hamburger icon
  hamburger.classList.toggle('transformed');
}


window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

document.querySelectorAll(".article-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("expanded"); // Toggle the expanded class to expand/collapse the description
  });
});

function filterArticles(category) {
  const articles = document.querySelectorAll(".article-item"); // Select all articles
  const buttons = document.querySelectorAll(".category-button"); // Select all category buttons

  // Remove 'active' class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Find and add 'active' class to the clicked button
  const activeButton = Array.from(buttons).find(
    (button) => button.innerText.trim().toLowerCase() === category.toLowerCase()
  );

  if (activeButton) {
    activeButton.classList.add("active");
  }

  // Filter articles based on category
  articles.forEach((article) => {
    if (category === "all" || article.classList.contains(category)) {
      article.style.visibility = "visible";
      article.style.position = "relative";
      article.style.opacity = "1";
      article.style.transform = "scale(1)";
    } else {
      article.style.opacity = "0";
      article.style.transform = "scale(0.9)";
      setTimeout(() => {
        article.style.visibility = "hidden";
        article.style.position = "absolute";
      }, 300); // Wait for the opacity and scale transition to finish before hiding
    }
  });
}
// Select hamburger and menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// Add event listener to the hamburger
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active"); // Toggle the menu visibility
  hamburger.classList.toggle("active"); // Toggle the hamburger animation
});

function navigate(page) {
  // You can replace this with actual logic to navigate to the right page
  // For example, changing the window location:
  if (page === -1) {
    // Navigate to the previous page
    window.history.back();
  } else if (page === 1) {
    window.location.href = "notice1.html"; // Navigate to page 1
  } else if (page === 2) {
    window.location.href = "notice2.html"; // Navigate to page 2
  } else if (page === 3) {
    window.location.href = "notice3.html"; // Navigate to page 3
  }
}

// Function to open the modal and display the clicked image
function openModal(imageSrc, imageAlt) {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the modal image and caption elements
  var modalImage = document.getElementById("modalImage");
  var caption = document.getElementById("caption");

  // Set the source of the modal image and the caption text
  modalImage.src = imageSrc;
  caption.innerHTML = imageAlt;

  // Display the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Hide the modal
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = function () {
  sendMessage(); // Automatically send a greeting as soon as the page loads
};

