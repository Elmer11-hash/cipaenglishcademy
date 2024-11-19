// Function to send messages
function sendMessage(userInput = "") {
  var chatlog = document.getElementById("chatlog");

  // Display user message if userInput is provided
  if (userInput) {
    var userMessage = document.createElement("p");
    userMessage.className = "userMessage";
    userMessage.innerHTML = "You: " + userInput;
    chatlog.appendChild(userMessage);
  }

  // Bot's automatic greeting and links when the page loads or after user clicks
  var botResponse = document.createElement("p");
  botResponse.className = "botMessage";

  if (userInput === "") {
    // Initial greeting and options
    botResponse.innerHTML =
      "<strong>CIPBOT</strong>: Hello! I'm CIPBOT. How can I assist you today?<br>" +
      "<button class='chatbotButton' onclick='sendMessage(\"Courses Offered\")'>Courses Offered</button> | " +
      "<button class='chatbotButton' onclick='sendMessage(\"What's New?\")'>What's New?</button> | " +
      "<button class='chatbotButton' onclick='sendMessage(\"How can I join CIP?\")'>How can I join CIP?</button>";
  } else {
    // Respond to the user's choice with appropriate links
    switch (userInput) {
      case "Courses Offered":
        botResponse.innerHTML =
          "<strong>CIPBOT</strong>: Here are the courses offered:<br>" +
          "<button class='chatbotButton' onclick='window.location.href=\"#courses-offered\"'>View Courses</button>";
        break;
      case "What's New?":
        botResponse.innerHTML =
          "<strong>CIPBOT</strong>: Here's what's new:<br>" +
          "<button class='chatbotButton' onclick='window.location.href=\"#whats-new\"'>Latest Updates</button>";
        break;
      case "How can I join CIP?":
        botResponse.innerHTML =
          "<strong>CIPBOT</strong>: Here's how you can join CIP:<br>" +
          "<button class='chatbotButton' onclick='window.location.href=\"#how-to-join\"'>Join Now</button>";
        break;
      default:
        botResponse.innerHTML =
          "<strong>CIPBOT</strong>: I'm sorry, I didn't understand that. Please choose an option.<br>" +
          "<button class='chatbotButton' onclick='sendMessage(\"Courses Offered\")'>Courses Offered</button> | " +
          "<button class='chatbotButton' onclick='sendMessage(\"What's New?\")'>What's New?</button> | " +
          "<button class='chatbotButton' onclick='sendMessage(\"How can I join CIP?\")'>How can I join CIP?</button>";
        break;
    }
  }

  chatlog.appendChild(botResponse);

  // Scroll to the bottom of the chatlog
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Toggle chatbox visibility
function toggleChatBox() {
  var chatbox = document.getElementById("chatbox");
  if (chatbox.style.display === "none" || chatbox.style.display === "") {
    chatbox.style.display = "flex"; // Show the chatbox
  } else {
    chatbox.style.display = "none"; // Hide the chatbox
  }
}

// Hide chatbox if clicked outside (also triggers the chatbox to exit)
document.addEventListener("click", function (event) {
  var chatbox = document.getElementById("chatbox");
  var toggleButton = document.getElementById("toggleChatButton"); // Replace with your chatbox toggle button ID

  // Check if the click is outside the chatbox and toggle button
  if (
    chatbox.style.display === "flex" &&
    !chatbox.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    chatbox.style.display = "none"; // Hide the chatbox
  }
});

// Draggable functionality for the chatbox
let isDragging = false;
let offsetX, offsetY;

const chatbox = document.getElementById("chatbox");
const chatboxHeader = document.getElementById("chatboxHeader");

// Make the chatbox draggable
chatboxHeader.addEventListener("mousedown", function (event) {
  isDragging = true;
  offsetX = event.clientX - chatbox.getBoundingClientRect().left;
  offsetY = event.clientY - chatbox.getBoundingClientRect().top;
  chatbox.style.transition = "none"; // Disable animation during dragging
});

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    chatbox.style.left = event.clientX - offsetX + "px";
    chatbox.style.top = event.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
  chatbox.style.transition = "all 0.2s"; // Re-enable animation after dragging
});

// Automatically send a greeting when the page loads
window.onload = function () {
  sendMessage(); // Automatically send a greeting as soon as the page loads
};
