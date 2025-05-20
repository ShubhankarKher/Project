// Chatbot functionality
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.initializeChatbot();
    }

    initializeChatbot() {
        // Create chatbot container
        const chatbotHTML = `
            <div class="chatbot-container">
                <div class="chatbot-header">
                    <h3>Weather Outfit Assistant</h3>
                    <button class="minimize-btn"><i class="fas fa-minus"></i></button>
                </div>
                <div class="chatbot-messages"></div>
                <div class="chatbot-input">
                    <input type="text" placeholder="Ask about outfits..." />
                    <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
            <button class="chatbot-toggle">
                <i class="fas fa-comments"></i>
            </button>
        `;

        // Add chatbot to body
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);

        // Get elements
        this.container = document.querySelector('.chatbot-container');
        this.toggleBtn = document.querySelector('.chatbot-toggle');
        this.minimizeBtn = document.querySelector('.minimize-btn');
        this.messagesContainer = document.querySelector('.chatbot-messages');
        this.input = document.querySelector('.chatbot-input input');
        this.sendBtn = document.querySelector('.chatbot-input .send-btn');

        // Add event listeners
        this.toggleBtn.addEventListener('click', () => this.toggleChatbot());
        this.minimizeBtn.addEventListener('click', () => this.toggleChatbot());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Add welcome message
        this.addMessage('bot', 'Hi! I\'m your Weather Outfit Assistant. How can I help you today?');
    }

    toggleChatbot() {
        this.isOpen = !this.isOpen;
        this.container.style.display = this.isOpen ? 'flex' : 'none';
        this.toggleBtn.style.display = this.isOpen ? 'none' : 'flex';
    }

    addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">
                ${text}
            </div>
        `;
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage('user', message);
        this.input.value = '';

        // Get bot response
        const response = this.getBotResponse(message);
        this.addMessage('bot', response);
    }

    getBotResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Weather-related responses
        if (lowerMessage.includes('hot') || lowerMessage.includes('summer')) {
            return 'For hot weather, I recommend lightweight, breathable fabrics like cotton and linen. Choose loose-fitting clothes and light colors. Don\'t forget sunscreen and a wide-brimmed hat!';
        }
        if (lowerMessage.includes('cold') || lowerMessage.includes('winter')) {
            return 'For cold weather, layering is key! Start with a thermal base layer, add a warm sweater, and finish with a winter coat. Don\'t forget gloves, a scarf, and a hat.';
        }
        if (lowerMessage.includes('rain') || lowerMessage.includes('wet')) {
            return 'For rainy weather, waterproof outerwear is essential. A good rain jacket, water-resistant pants, and waterproof boots will keep you dry. Don\'t forget an umbrella!';
        }

        // General outfit questions
        if (lowerMessage.includes('outfit') || lowerMessage.includes('wear')) {
            return 'I can help you choose outfits based on the weather! Just select your current weather condition from the options above, and I\'ll provide detailed recommendations.';
        }

        // Greeting responses
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return 'Hello! How can I help you with your outfit today?';
        }

        // Default response
        return 'I\'m here to help with outfit recommendations based on weather conditions. You can select your current weather from the options above, or ask me specific questions about what to wear!';
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
}); 