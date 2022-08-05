const quizData = [
    {
        question : 'How old is Ataberk?',
        a:'20',
        b:'21',
        c:'22',
        d:'23',
        correct: 'b',
    },
    {
        question : 'What is the favorite programming language of Ataberk?',
        a:'Python',
        b:'Ruby',
        c:'JavaScript',
        d:'C#',
        correct: 'c',
    }, 
    {
        question : 'What is the favorite instrument of Ataberk?',
        a:'Drum',
        b:'Flute',
        c:'Piano',
        d:'Guitar',
        correct: 'd',
    },
    {
        question : 'What is the favorite meal of Ataberk?',
        a:'Pizza',
        b:'Yağlama',
        c:'Fettuccine Alfredo',
        d:'Tepsi Kebabı',
        correct: 'b',
    },
    {
        question : 'What is the favorite sport of Ataberk?',
        a:'Basketball',
        b:'Soccer',
        c:'Volleyball',
        d:'Table Tennis',
        correct: 'd',
    },
    {
        question : 'What is the favorite PC game of Ataberk?',
        a:'Witcher Series',
        b:'Dark Souls Series',
        c:'Grand Theft Auto Series',
        d:'League of Legends',
        correct: 'a',
    },
    {
        question : 'What is the favorite MMORPG of Ataberk?',
        a:'Metin 2',
        b:'Final Fantasy XIV',
        c:'World of Warcraft',
        d:'Elder Scrolls Online',
        correct: 'c',
    },
    {
        question : 'What is the favorite metal band of Ataberk?',
        a:'Metallica',
        b:'Avenged Sevenfold',
        c:'Dream Theater',
        d:'Opeth',
        correct: 'b',
    },
    {
        question : 'What is the favorite solo guitarist of Ataberk?',
        a:'Kirk Hammet',
        b:'Synster Gates',
        c:'John Petrucci',
        d:'Steve Vai',
        correct: 'c',
    },
    {
        question : 'What is the favorite movie series of Ataberk?',
        a:'The Chronicles of Narnia',
        b:'Harry Potter',
        c:'Matrix',
        d:'Lord of the Rings',
        correct: 'd',
    },
    {
        question : 'What is the favorite TV series of Ataberk?',
        a:'Prison Break',
        b:'The Wire',
        c:'Breaking Bad',
        d:'Sopranos',
        correct: 'c',
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
let currentQuiz = 0;
let score = 0;
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
loadQuiz();

submitBtn.addEventListener('click', ()=>{
    
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
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})