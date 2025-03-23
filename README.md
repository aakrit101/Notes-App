# 📝 Notes App

A dynamic, modern, and educational web app built to help users learn and retain concepts through **flashcards**, **personalized quizzes**, and **AI-generated notes**. It features a clean user interface with a full-page parallax effect and uses Hugging Face's language models for smart text generation.

## 🚀 Features

- 📚 Flashcards: Create and delete interactive flashcards for effective memorization.
- 🧠 AI Notes: Use Hugging Face API to generate notes based on your prompts.
- 🧪 Quizzes: Build your own quizzes, take them, and check your results.
- 🎨 Modern UI: Styled with CSS to resemble a modern Squarespace-inspired layout, including full-page parallax scrolling.
- 🔐 Secure API Handling: Hugging Face API key is stored in a `.env` file and ignored by Git for security.

## 🖼️ Screenshots

*(Add screenshots of the Flashcards, Notes, and Quiz sections here)*

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **AI Integration**: Hugging Face Inference API
- **Environment Management**: `python-dotenv`

## 🔧 Setup Instructions

1. Clone the repo:
   ```
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```

2. Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Create a `.env` file:
   ```
   HF_API_KEY=your_huggingface_api_key_here
   ```

5. Run the Flask app:
   ```
   python app.py
   ```

6. Open `Note.html` in your browser to access the app.

## 📁 Project Structure

```
├── app.py             # Flask backend
├── Note.html          # Main HTML UI
├── script.js          # Client-side logic
├── style.css          # Styling and layout
├── .env               # Hugging Face API key (ignored by Git)
├── requirements.txt   # Python dependencies
└── README.md
```

## 📜 License

This project is licensed under the MIT License.

## 💬 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---