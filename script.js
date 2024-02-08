const perguntas = [
    {
        pergunta: "Quantas células tem o corpo humano?",
        respostas: [
            "50 trilhões",
            "37 trilhões",
            "75 trilhões",
            "100 trilhões",
        ],
        correta: 0 // 50 trilhões
    },
    {
        pergunta: "Qual é o nome do mais recente elemento adicionado à tabela periódica?",
        respostas: [
            "Moscovium",
            "Livermorium",
            "Nihonium",
            "Tennessine",
        ],
        correta: 0 // Moscovium
    },
    {
        pergunta: "Quem foi o primeiro cientista a medir a velocidade da luz?",
        respostas: [
            "Galileu Galilei",
            "Albert Einstein",
            "Isaac Newton",
            "Ole Rømer",
        ],
        correta: 3 // Ole Rømer
    },
    {
        pergunta: "Qual é a montanha mais alta do sistema solar?",
        respostas: [
            "Monte Everest",
            "Monte Olimpo",
            "Monte Kilimanjaro",
            "Monte Aconcágua",
        ],
        correta: 1 // Monte Olimpo
    },
    {
        pergunta: "Qual é a cidade mais populosa do mundo?",
        respostas: [
            "Tóquio",
            "Xangai",
            "Cidade do México",
            "Delhi",
        ],
        correta: 0 // Tóquio
    },
    {
        pergunta: "Quantas luas tem Saturno?",
        respostas: [
            "60",
            "31",
            "82",
            "47",
        ],
        correta: 2 // 82
    },
    {
        pergunta: "Qual é o menor osso do corpo humano?",
        respostas: [
            "Estribo",
            "Martelo",
            "Falange",
            "Pisiforme",
        ],
        correta: 0 // Estribo
    },
    {
        pergunta: "Quem descobriu a lei da gravidade?",
        respostas: [
            "Isaac Newton",
            "Albert Einstein",
            "Galileu Galilei",
            "Johannes Kepler",
        ],
        correta: 3 // Johannes Kepler
    },
    {
        pergunta: "Qual é o livro mais vendido de todos os tempos, depois da Bíblia?",
        respostas: [
            "O Senhor dos Anéis",
            "Dom Quixote",
            "Harry Potter e a Pedra Filosofal",
            "O Pequeno Príncipe",
        ],
        correta: 1 // Dom Quixote
    },
    {
        pergunta: "Qual é o elemento químico mais raro na crosta terrestre?",
        respostas: [
            "Astatínio",
            "Promécio",
            "Actínio",
            "Tálio",
        ],
        correta: 1 // Promécio
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector ('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
