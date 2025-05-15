const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotLog = document.getElementById('chatbot-log');
const chatbotInput = document.getElementById('chatbot-input');
const darkModeToggle = document.getElementById('dark-mode-toggle');

let greeted = false;

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.toggle('open');
  chatbotInput.focus();

  if (!greeted && chatbotWindow.classList.contains('open')) {
    appendMessage('bot', 'Hello! I’m here to help you. Ask me anything!');
    greeted = true;
  }
});

chatbotInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
  msgDiv.textContent = message;
  chatbotLog.appendChild(msgDiv);
  chatbotLog.scrollTop = chatbotLog.scrollHeight;
}

function sendMessage() {
  const userText = chatbotInput.value.trim();
  if (userText === '') return;

  appendMessage('user', userText);
  chatbotInput.value = '';

  // Convert input to lowercase for matching
  const text = userText.toLowerCase();

  setTimeout(() => {
    if (text.includes('skills')) {
      appendMessage('bot', 'My main skills include JavaScript, Python, HTML & CSS, React, Node.js, Git and cybersecurity tools.');
    } else if (text.includes('name')) {
      appendMessage('bot', 'My name is Israel Akintomide.');
    } else if (text.includes('resume')) {
      appendMessage('bot', 'You can view my resume on the Resume page or download it from the website.');
    } else if (text.includes('projects')) {
      appendMessage('bot', 'Check out my projects page for some of my latest work and coding examples.');
    } else if (text.includes('contact')) {
      appendMessage('bot', 'You can reach me via the Contact page or send me an email at israel@example.com.');
    } else if (text.includes('about')) {
      appendMessage('bot', 'I am an IT Help Desk and Cybersecurity professional with a B.S. in Computer Technology.');
    } else {
      appendMessage('bot', "Sorry, I don't have an answer for that. Try asking about skills, name, resume, projects or contact.");
    }
  }, 600);
}

// Dark mode toggle code
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});