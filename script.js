const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado"); },
    const perguntas = [
  {
    enunciado:
      "Logo após sair da escola, você encontra uma nova tecnologia: um chat capaz de responder qualquer dúvida e também criar imagens e áudios extremamente realistas. O que vem à sua mente?",
    alternativas: [
      {
        texto: "Isso é bem assustador!",
        afirmacao: [
          "Você ficou surpreso com as possibilidades que essa tecnologia oferece e a sensação de não saber até onde ela pode chegar.",
        ],
      },
      {
        texto: "Isso é incrível!",
        afirmacao: [
         "Você ficou empolgado e imediatamente quis entender como poderia utilizar essa IA no seu cotidiano.",
        ],
      },
    ],
  },
];
        enunciado: "Após aprender sobre a IA, sua professora, Alessandra, decidiu fazer uma série de aulas sobre o tema. No final de uma delas, ela pede que você escreva um trabalho sobre como a IA pode ser usada em sala de aula. O que você faz?",
        alternativas: [
            {
                texto: "Usa uma ferramenta de busca baseada em IA para ajudar a encontrar informações e explicações que tornem o conteúdo mais acessível.",
                afirmacao: "Você se apoiou na IA para encontrar informações de qualidade e simplificadas sobre o tema."
            },
            {
                texto: "Pesquisou na internet de maneira tradicional e usou seus próprios conhecimentos para escrever o trabalho.",
                afirmacao: "Você preferiu confiar no seu próprio processo de pesquisa e na sua experiência para fazer o trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Depois de entregar o trabalho, a professora promove um debate para entender como foi feita a pesquisa. Durante a conversa, a questão do impacto da IA no futuro dos empregos é discutida. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a IA pode abrir novas portas no mercado de trabalho e servir como um suporte importante para as pessoas.",
                afirmacao: "Você vê a IA como uma ferramenta de inovação que pode criar novos empregos e melhorar a eficiência de várias áreas."
            },
            {
                texto: "Estou preocupado com os empregos que podem ser substituídos pelas máquinas, e acho que devemos pensar em maneiras de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com os trabalhadores levou você a defender o uso ético da IA e a criar um grupo para estudar os impactos dela nas profissões."


            }
        ]
    },
    {
        enunciado: "Após o debate, você tem que criar uma imagem no computador que represente sua visão sobre a IA. O que você faz?",
        alternativas: [
            {
                texto:"Cria uma imagem usando uma plataforma tradicional de design, como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda têm dificuldades com ferramentas simples de design, então resolveu compartilhar o que sabe sobre pintura digital com os iniciantes."
            },
            {
                texto: "Usa um gerador de imagens baseado em IA para criar uma imagem que represente sua opinião sobre a tecnologia.",
                afirmacao: "Você agilizou a criação do trabalho usando uma IA para gerar imagens, e agora ensina quem tem dificuldades de desenhar a usar essa ferramenta."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


