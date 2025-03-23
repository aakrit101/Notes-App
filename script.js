const flashcards = [];
    const quiz = [];

    function renderFlashcards() {
      const container = document.getElementById("flashcards-container");
      container.innerHTML = "";
      flashcards.forEach((card) => {
        const div = document.createElement("div");
        div.className = "flashcard";
        div.textContent = card.question;
        div.onclick = () => {
          div.textContent = div.textContent === card.question ? card.answer : card.question;
        };
        container.appendChild(div);
      });
    }

    function addFlashcard() {
      const q = document.getElementById("fc-question").value.trim();
      const a = document.getElementById("fc-answer").value.trim();
      if (!q || !a) return alert("Please fill in both fields.");
      flashcards.push({ question: q, answer: a });
      renderFlashcards();
      document.getElementById("fc-question").value = "";
      document.getElementById("fc-answer").value = "";
    }

    function deleteLastFlashcard() {
      if (flashcards.length > 0) {
        flashcards.pop();
        renderFlashcards();
      } else {
        alert("No flashcards to delete!");
      }
    }

    function renderQuiz() {
      const container = document.getElementById("quiz-container");
      container.innerHTML = "";
      quiz.forEach((q, idx) => {
        const div = document.createElement("div");
        div.className = "quiz-question";

        const questionP = document.createElement("p");
        questionP.textContent = q.question;
        div.appendChild(questionP);

        q.choices.forEach((choice, cIdx) => {
          const label = document.createElement("label");
          label.className = "choice";
          label.innerHTML = `
            <input type="radio" name="q${idx}" value="${cIdx}" />
            ${choice}
          `;
          div.appendChild(label);
          div.appendChild(document.createElement("br"));
        });

        container.appendChild(div);
      });
    }

    function addQuiz() {
      const qText = document.getElementById("quiz-q").value.trim();
      const opt1 = document.getElementById("quiz-opt1").value.trim();
      const opt2 = document.getElementById("quiz-opt2").value.trim();
      const opt3 = document.getElementById("quiz-opt3").value.trim();
      const ans = parseInt(document.getElementById("quiz-ans").value) - 1;

      if (!qText || !opt1 || !opt2 || !opt3 || ans < 0 || ans > 2) {
        return alert("Please fill out all quiz fields correctly.");
      }

      quiz.push({
        question: qText,
        choices: [opt1, opt2, opt3],
        answer: ans
      });

      renderQuiz();

      document.getElementById("quiz-q").value = "";
      document.getElementById("quiz-opt1").value = "";
      document.getElementById("quiz-opt2").value = "";
      document.getElementById("quiz-opt3").value = "";
      document.getElementById("quiz-ans").value = "";
    }

    function deleteLastQuiz() {
      if (quiz.length > 0) {
        quiz.pop();
        renderQuiz();
      } else {
        alert("No quiz questions to delete!");
      }
    }

    function checkQuiz() {
      let correct = 0;
      quiz.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) correct++;
      });
      document.getElementById("quiz-result").textContent = `You got ${correct} out of ${quiz.length} correct!`;
    }

    function askHuggingFace() {
      const input = document.getElementById("hf-input").value.trim();
      const responseEl = document.getElementById("hf-response");

      if (!input) return alert("Please enter a prompt.");

      responseEl.textContent = "⌛ Thinking...";

      fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Answer this question: ${input}` })
      })
        .then(res => res.json())
        .then(data => {
          if (data.reply) {
            responseEl.textContent = data.reply;
          } else {
            responseEl.textContent = "Error: " + data.error;
          }
        })
        .catch(err => {
          responseEl.textContent = "Network error: " + err.message;
        });
    }