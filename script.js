const quizData = [
    {
      question: "What is the largest planet in our solar system?",
      a: "Earth",
      b: "Jupiter",
      c: "Mars",
      d: "Saturn",
      correct: "b",
    },
    {
      question: "Which galaxy is the Milky Way a part of?",
      a: "Andromeda",
      b: "Triangulum",
      c: "Whirlpool",
      d: "Messier 87",
      correct: "a",
    },
    {
      question: "What is the name of the first human to travel in space?",
      a: "Neil Armstrong",
      b: "Yuri Gagarin",
      c: "Buzz Aldrin",
      d: "Michael Collins",
      correct: "b",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Neptune",
      correct: "b",
    },
    {
      question: "What is the largest moon of Saturn?",
      a: "Titan",
      b: "Enceladus",
      c: "Rhea",
      d: "Dione",
      correct: "a",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  