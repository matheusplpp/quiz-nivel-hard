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
    {
        pergunta: "Qual é o número primo mais próximo de 1000?",
        respostas: [
            "997",
            "1009",
            "1013",
            "1021"
        ],
        correta: 0 // 997
    },
    {
        pergunta: "Quem é o autor de 'O Processo' e 'A Metamorfose'?",
        respostas: [
            "Franz Kafka",
            "Fyodor Dostoevsky",
            "Leo Tolstoy",
            "Albert Camus"
        ],
        correta: 0 // Franz Kafka
    },
    {
        pergunta: "Qual é o maior rio do mundo em volume de água?",
        respostas: [
            "Nilo",
            "Amazonas",
            "Yangtze",
            "Mississipi"
        ],
        correta: 1 // Amazonas
    },
    {
        pergunta: "Qual é o nome do filósofo pré-socrático conhecido por suas teorias sobre o amor e a guerra?",
        respostas: [
            "Heráclito",
            "Parmênides",
            "Demócrito",
            "Empédocles"
        ],
        correta: 3 // Empédocles
    },
    {
        pergunta: "Qual é a cidade mais alta do mundo?",
        respostas: [
            "Lhasa, Tibet",
            "La Paz, Bolívia",
            "Quito, Equador",
            "Kathmandu, Nepal"
        ],
        correta: 1 // La Paz, Bolívia
    },
    {
        pergunta: "Qual é a única constelação do zodíaco representada por um objeto inanimado?",
        respostas: [
            "Touro",
            "Aquário",
            "Virgem",
            "Libra"
        ],
        correta: 1 // Aquário
    },
    {
        pergunta: "Quem é considerado o pai da psicanálise?",
        respostas: [
            "Carl Jung",
            "Sigmund Freud",
            "Alfred Adler",
            "Erich Fromm"
        ],
        correta: 1 // Sigmund Freud
    },
    {
        pergunta: "Qual é o elemento químico mais denso?",
        respostas: [
            "Osmio",
            "Platina",
            "Iridio",
            "Rênio"
        ],
        correta: 0 // Osmio
    },
    {
        pergunta: "Qual é o nome da partícula subatômica que compõe os nêutrons e prótons?",
        respostas: [
            "Bóson de Higgs",
            "Quark",
            "Leptônio",
            "Fóton"
        ],
        correta: 1 // Quark
    },
    {
        pergunta: "Quem é o autor do quadro 'O Grito'?",
        respostas: [
            "Pablo Picasso",
            "Edvard Munch",
            "Salvador Dalí",
            "Vincent van Gogh"
        ],
        correta: 1 // Edvard Munch
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector ('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length

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
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}

// Funcionamento do botão

const enviarBtn = document.querySelector('#enviar');

enviarBtn.addEventListener('click', () => {
    let respostasCorretas = 0;

    for (const pergunta of perguntas) {
        const radios = document.querySelectorAll(`input[name="pergunta${perguntas.indexOf(pergunta)}"]:checked`);

        if (radios.length > 0) {
            const respostaSelecionada = parseInt(radios[0].value);
            if (respostaSelecionada === pergunta.correta) {
                respostasCorretas++;
            }
        }
    }

     //Aqui basicamente de acordo com a porcentagem de acerto ele manda uma mensagem especifica

     var percentualDeAcerto = (respostasCorretas / totalDePerguntas) * 100;

     if (percentualDeAcerto == 100) {
         var resultado = `Certeza que você roubou de alguma forma pra ter gabaritado esse teste`;
     } else if (percentualDeAcerto >= 80) {
         var resultado = `Você acertou esse tanto ${respostasCorretas} sem ajuda ? kkkkk me poupe`;
     } else if (percentualDeAcerto >= 60) {
         var resultado = `Deu até pro gasto mas não se acha muito não ! ${respostasCorretas} de ${totalDePerguntas} perguntas.`;
     } else if (percentualDeAcerto >= 40) {
         var resultado = `Não é possivel, você é alfabetizado pra acertar tão pouco ? ${respostasCorretas} de ${totalDePerguntas} perguntas.`;
     } else if (percentualDeAcerto >= 20) {
         var resultado = `kkkkkkk serio isso ? era melhor nem ter tentado, só acertou isso ? ${respostasCorretas} de ${totalDePerguntas} perguntas.`;
     } else if (percentualDeAcerto > 0) {
         var resultado = `Nossa que piada, primeira vez que eu vejo um Neandertal, muito prazer ! acertou um total de ${respostasCorretas}`;
     } else {
         var resultado = `Parabéeens achamos um acefalo não acertou nada kkkkkkkkk`;
     }
       
 
     alert(resultado);

     
    });