document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const chatLog = document.getElementById('chatbot-log');
  const chatInput = document.getElementById('chatbot-input');

  toggleButton.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
  });

  chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const userMessage = chatInput.value.trim();
      if (!userMessage) return;

      appendMessage('You', userMessage);
      respondTo(userMessage.toLowerCase());
      chatInput.value = '';
    }
  });

  function appendMessage(sender, message) {
    const msg = document.createElement('div');
    msg.classList.add('message');
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function respondTo(input) {
    let response = "I'm sorry, I didn't understand that.";

    if (input.includes('certification') || input.includes('certifications')) {
      response = 'I am certified in ISC2 Certified in Cybersecurity and CompTIA Network+.';
    } else if (input.includes('project')) {
      response = 'I’ve worked on network traffic analysis, honeypot simulation using Kippo, and a SHA256 password hashing tool.';
    } else if (input.includes('experience')) {
      response = 'I’ve worked at Allied Universal and CashStash as a Help Desk Technician, resolving tickets and providing IT support.';
    } else if (input.includes('skills')) {
      response = 'I have experience with ServiceNow, Salesforce, AWS, Azure, Windows/Mac/Linux, and cybersecurity tools like Wireshark, Splunk, and Metasploit.';
    } else if (input.includes('resume')) {
      response = 'You can view and download my resume on the Resume page.';
    }

    appendMessage('Chatbot', response);
  }
});