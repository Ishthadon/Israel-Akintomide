document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const input = document.getElementById("chatbot-input");
  const log = document.getElementById("chatbot-log");

  // Toggle chatbot window
  toggleBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("open");

    // Show welcome message once
    if (chatbotWindow.classList.contains("open") && log.innerHTML.trim() === "") {
      appendMessage("Bot", "👋 Hi there! Ask me about my skills, projects, resume or how to contact me.");
    }
  });

  // Handle user input
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

  // Append a message to the chat log
  function appendMessage(sender, message) {
    const msg = document.createElement("div");
    msg.className = "chat-message";
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }

  // Simple bot logic
  function respondTo(message) {
    let response = "🤔 I'm not sure how to answer that. Try asking about my skills, projects or resume!";

    if (message.includes("hello") || message.includes("hi")) {
      response = "👋 Hello! How can I help you with my portfolio?";
    } else if (message.includes("name")) {
      response = "🧑 My name is Israel Akintomide.";
    } else if (message.includes("skills")) {
      response = "🛠️ I’m skilled in IT support, cybersecurity, AWS, Azure, JavaScript, Python and more.";
    } else if (message.includes("resume")) {
      response = "📄 You can view and download my resume from the Resume page.";
    } else if (message.includes("project")) {
      response = "💡 I’ve worked on projects like honeypots, SHA256 password crackers and proxy automation.";
    } else if (message.includes("contact")) {
      response = "📬 You can reach me via the contact form on the Contact page!";
    } else if (message.includes("tip") || message.includes("help")) {
      response = "💡 Try asking things like:\n- What are your skills?\n- Show me your projects\n- How do I contact you?";
    } else if (message.includes("dark")) {
      response = "🌙 Dark mode feature is coming soon!";
    }

    appendMessage("Bot", response);
  }
});