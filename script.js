const questions = [
    {
        question: "Você trabalha em um escritório tradicional, e agora a empresa começou a adotar IA para automatizar várias tarefas. Como você se sente sobre isso?",
        answers: [
            { text: "Estou empolgado com as novas possibilidades!", nextQuestion: 1 },
            { text: "Fico receoso, o que vai acontecer com os meus colegas?", nextQuestion: 2 }
        ]
    },
    {
        question: "Sua escola introduziu uma plataforma de aprendizado baseada em IA, que personaliza os conteúdos de acordo com o seu progresso. O que você acha disso?",
        answers: [
            { text: "Achei incrível, finalmente algo que me ajuda a aprender no meu ritmo!", nextQuestion: 3 },
            { text: "Isso parece uma distração. Prefiro o método tradicional.", nextQuestion: 4 }
        ]
    },
    {
        question: "Agora, você tem um assistente pessoal de IA no seu celular que ajuda a organizar sua agenda, responder mensagens e até sugerir novas atividades. Como você reage?",
        answers: [
            { text: "Isso é incrível, vai me ajudar muito!", nextQuestion: 5 },
            { text: "Não sei se confio em deixar a IA controlar tantas coisas pessoais.", nextQuestion: 6 }
        ]
    },
    {
        question: "Você está criando um projeto artístico e decide usar uma ferramenta de IA para gerar imagens e ideias. Qual é sua opinião?",
        answers: [
            { text: "A IA me ajuda a expandir minha criatividade de maneiras novas.", nextQuestion: 7 },
            { text: "Não gosto da ideia de depender da IA para criar. Quero ser 100% autoral.", nextQuestion: 8 }
        ]
    },
    {
        question: "A IA está sendo usada para prever crimes em sua cidade, analisando dados de comportamento e atividades suspeitas. O que você pensa sobre isso?",
        answers: [
            { text: "É uma boa ideia, se ajudar a combater crimes de forma mais eficiente.", nextQuestion: 9 },
            { text: "Isso pode ser uma invasão de privacidade e abrir espaço para abusos.", nextQuestion: 10 }
        ]
    }
];

let currentQuestion = 0;
let answers = [];

function updateQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').innerText = question.question;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons[0].innerText = question.answers[0].text;
    buttons[1].innerText = question.answers[1].text;
}

function nextQuestion(answerIndex) {
    answers.push(answerIndex);
    const next = questions[currentQuestion].answers[answerIndex].nextQuestion;
    currentQuestion = next;

    if (currentQuestion >= questions.length) {
        showResult();
    } else {
        updateQuestion();
    }
}

function showResult() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
    document.getElementById('result-text').innerText = "Você completou o quiz! Obrigado por participar.";
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    document.querySelector('.quiz-container').style.display = 'block';
    document.querySelector('.result-container').style.display = 'none';
    updateQuestion();
}

// Inicia o quiz
updateQuestion();
