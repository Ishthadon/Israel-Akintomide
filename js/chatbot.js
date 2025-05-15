const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

const faq = {
  "skills": "I am skilled in HTML, CSS, JavaScript, Git, and basic Node.js.",
  "experience": "I have completed multiple web projects and graduated with a Computer Science degree.",
  "projects": "Check out my projects page for links to my GitHub repositories.",
  "resume": "You can view or download my resume on the Resume page.",
  "contact": "You can reach me through the Contact page using the form.",
  "hello": "Hi there! How can I help you?",
  "hi": "Hello! What would you like to know about me?"
};

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
  msgDiv.textContent = text;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

chatSend.addEventListener('click', () => {
  const userText = chatInput.value.trim().toLowerCase();
  if (!userText) return;

  addMessage('user', userText);

  let response = "Sorry, I don't understand that. Try asking about my skills, projects, or experience.";

  for (const key in faq) {
    if (userText.includes(key)) {
      response = faq[key];
      break;
    }
  }

  setTimeout(() => {
    addMessage('bot', response);
  }, 500);

  chatInput.value = '';
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') chatSend.click();
});