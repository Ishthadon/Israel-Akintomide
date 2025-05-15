document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const input = document.getElementById("chatbot-input");
  const log = document.getElementById("chatbot-log");

  // Show/hide chatbot
  toggleBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
  });

  // Handle input
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userMessage = input.value.trim();
      if (userMessage) {
        appendMessage("You", userMessage);
        respondTo(userMessage.toLowerCase());
        input.value = "";
      }
    }
  });

  function appendMessage(sender, message) {
    const msg = document.createElement("div");
    msg.className = "chat-message";
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }

  function respondTo(message) {
    let response = "I'm not sure how to answer that.";

    if (message.includes("hello") || message.includes("hi")) {
      response = "Hello! How can I help you with my portfolio?";
    } else if (message.includes("name")) {
      response = "My name is Israel Akintomide.";
    } else if (message.includes("skills")) {
      response = "I'm skilled in IT support, cybersecurity, AWS, Azure, and more.";
    } else if (message.includes("resume")) {
      response = "You can view and download my resume on the Resume page.";
    } else if (message.includes("project")) {
      response = "I’ve worked on honeypots, SHA256 password cracking tools, and proxy-based automation.";
    } else if (message.includes("contact")) {
      response = "Feel free to use the contact form on the Contact page!";
    }

    appendMessage("Bot", response);
  }
});