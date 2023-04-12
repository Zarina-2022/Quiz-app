const quizData = [
    {
      question: "Which flower's name comes from the Old French for 'Lion's Tooth'?",
      a: 'Dandelion',
      b: 'Chamomile',
      c: 'Carnation',
      d: 'Amaryllis',
      correct: 'a',
    },
    {
      question: 'Which of these flowers is not represented on the Apple emoji keyboard?',
      a: 'Rose',
      b: 'Tulip',
      c: 'Sunflower',
      d: 'Daisy',
      correct: 'c',
    },
    {
      question: "Which country is the world's biggest exporter of orchids?",
      a: 'China',
      b: 'Thailand',
      c: 'Egypt',
      d: 'Brazil',
      correct: 'b',
    },
    {
      question: "Why is Amorphophallus Titanum commonly known as the 'Corpse Flower?'",
      a: "Because it's carnivorous",
      b: 'Because it resembles a dead body',
      c: 'Because it smells like rotting flesh',
      d: 'Because it grows in graveyards',
      correct: 'c',
    },
    {
      question: 'The rose is the national flower of England, the Maldives and which other country?',
      a: 'The USA',
      b: 'France',
      c: 'Australia ',
      d: 'Hungary',
      correct: 'a',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2 style="text-align: center; padding: 20px"> Quiz is over, you earned ${score * 20} points🥳 </h2>
        <button class="submit" onClick="location.reload()"> Try again 🌀</button>
      `
      }
    }
  })
  