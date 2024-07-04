const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = [
    {
        enunciado: "Esse teste de personalidade é um projeto escolar de Cauê Schioma. Ele é baseado em um teste de personalidade presente no jogo 'Ragnarök Online'. Por limitações educacionais, não está fiel ao teste do jogo. Não é para ser levado a sério. É apenas uma brincadeira. Não tem certo ou errado. Apenas responda com base no seu modo de pensar. Beleza?!",
        alternativas: [
            {
                texto: "Certo, vamos lá!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Com qual alternativa você mais se identifica?",
        alternativas: [

            {
                texto: "Estudo",
                afirmacao: "Você gosta de exercitar seu cérebro e sente prazer em experimentar coisas novas."
            },
            {
                texto: "Exercícios",
                afirmacao: "Você acredita que seu corpo seja um templo e tem uma mente simples e direta."
            },
            {
                texto: "Caridade",
                afirmacao: "Você é muito acolhedor e caridoso, e as pessoas acabam gostando de você mesmo que não se esforçe para isso."
            },
            {
                texto: "Violência",
                afirmacao: "Você sente prazer em desferir sofrimento nos outros e não possui empatia."
            }
        ]
    },
    {
        enunciado: "Com qual alternativa você mais se identifica?",
        alternativas: [

            {
                texto: "Mudança",
                afirmacao: "Acredita que é importante testar coisas novas e se desafiar, pois isso trará uma evolução pessoal."
            },
            {
                texto: "Permanência",
                afirmacao: "Tem medo de novidades e encontra conforto no conhecido."
            }
        ]
    },
    {
        enunciado: "Com qual alternativa você mais se identifica?",
        alternativas: [

            {
                texto: "Consumidor",
                afirmacao: "Se sente satisfeito e feliz ao comprar coisas novas."
            },
            {
                texto: "Produtor",
                afirmacao: "Gosta de realizar novos projetos."
            },
            {
                texto: "Fornecedor",
                afirmacao: "Tem uma mente empreendedora."
            }
        ]
    },
    {
        enunciado: "Com qual alternativa você mais se identifica?",
        alternativas: [

            {
                texto: "Fama",
                afirmacao: "Você gosta de chamar atenção, de se destacar e tem um bom nível de extroversão."
            },
            {
                texto: "Prudência",
                afirmacao: "Você não sente necessidade de chamar atenção e talvez não goste. Prefere ser mais um dentre os outros."
            }
        ]
    },
    {
        enunciado: "Com qual alternativa você mais se identifica?",
        alternativas: [

            {
                texto: "Teoria",
                afirmacao: "Antes de fazer algo novo, você prefere estudar sobre para minimizar erros."
            },
            {
                texto: "Experiência",
                afirmacao: "Ao dar início à um novo proejto, você está disposto a errar, aprender e adquirir experiência."
            }
        ]
    },
    {
        enunciado: "Com qual alternativa você mais se identifica?",
        alternativas: [

            {
                texto: "O passado",
                afirmacao: "Você está insatisfeito com o presente e gosta de lembrar do passado, com certa frequência."
            },
            {
                texto: "O futuro",
                afirmacao: "Você tem várias ideias e planos que deseja executar ao longo da vida."
            },
            {
                texto: "A realidade",
                afirmacao: "Você prefere ser 'pé no chão' e focar no presente. O seu lema é 'prefiro enfrentar a dura realidade do que a macia fantasia'."
            }
        ]
    },
    {
        enunciado: "É melhor morrer ao viver uma vida submissa",
        alternativas: [

            {
                texto: "Sim.",
                afirmacao: "Você é orgulhoso e detesta receber ordens."
            },
            {
                texto: "Não.",
                afirmacao: "Você faria de tudo para sobreviver."
            }
        ]
    },
    {
        enunciado: "O sucesso das outras pessoas te incomoda",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Você se sente mal, quando algum colega de escola/trabalho se dá bem, pois você gostaria de ser o melhor sempre."
            },
            {
                texto: "Não.",
                afirmacao: "Você não liga e/ou se inspira nas pessoas bem sucedidas."
            }
        ]
    },
    {
        enunciado: "Você gosta de estar na liderança",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você é confiante, gosta do seu jeito de fazer as coisas e tem facilidade em comandar um grupo."
            },
            {
                texto: "Não",
                afirmacao: "Você tem dificulade em lidar com pessoas e prefere seguir ordens."
            }
        ]
    },
    {
        enunciado: "Ao explorar uma caverna, você encontrou um beco sem saída. Examinando um muro ao seu lado, você percebeu uma alavanca com uma inscrição gravada ao lado dizendo 'Puxar'. Ao ver a inscrição, você sentiu uma vontade imensa de empurrar esta alavanca.",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Você é curioso e tem um impulso inconsequente que te levaria à fazer coisas novas e/ou perigosas."
            },
            {
                texto: "Não.",
                afirmacao: "Você é seguro e focado."
            }
        ]
    },
    {
        enunciado: "Dinheiro fala.",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Você deseja um emprego com remuneração alta e prioriza bens materiais."
            },
            {
                texto: "Não.",
                afirmacao: "Você, apesar de gostar de dinheiro, não vê como extrema prioridade em sua vida, pois prioriza outros valores."
            }
        ]
    },
    {
        enunciado: "Ao se deparar com uma vida rotineira...",
        alternativas: [
            {
                texto: "Eu me sinto como um robô",
                afirmacao: "Você tem o espírito livre e gosta do inesperado."
            },
            {
                texto: "Me sinto seguro e satisfeito",
                afirmacao: "Você tem medo do novo e se sente mais seguro fazendo as mesmas coisas."
            },
            {
                texto: "Eu não conheço a rotina",
                afirmacao: "Você provavelmente tem dificuldades em gerenciar o tempo e se sente mal por isso."
            }
        ]
    },
    {
        enunciado: "Você está andando casualmente por um shopping e encontra um item interessante à venda, em uma das vitrines. Você fica pensando se deveria ou não comprá-lo. A primeira coisa que você faz nessa situação é",
        alternativas: [
            {
                texto: "Pensar se você precisa disso ou não",
                afirmacao: "Você é uma pessoa analista e pensa em todos os fatores, antes de tomar uma decisão."
            },
            {
                texto: "Checar o preço",
                afirmacao: "Você faz o que for conveniente pra você, sem pensar muito."
            },
            {
                texto: "Comprar sem pensar!",
                afirmacao: "Você é impulsivo e não pensa nas consequências das atitudes."
            }
        ]
    },
    {
        enunciado: "Você é responsável por um serviço que exige um trabalho em equipe. Se você fizer sozinho, levará mais tempo e esforço, mas ficará do seu jeito. Se fizer o trabalho em equipe, será uma tarefa mais rápida. Sua escolha é...",
        alternativas: [
            {
                texto: "Fazer sozinho, mesmo que seja mais complicado",
                afirmacao: "Você não confia nas outras pessoas."
            },
            {
                texto: "Fazer em equipe, mesmo que não fique do meu jeito",
                afirmacao: "Você confia na capacidade das outras pessoas, mesmo que hajam riscos."
            }
        ]
    },
    {
        enunciado: "Durante um jantar social, você comete uma gafe no meio da conversa. Como você conserta a situação?",
        alternativas: [
            {
                texto: "Finjo que era uma piada",
                afirmacao: "Você não gosta de errar e sempre encontra meios de justificar suas atitudes."
            },
            {
                texto: "Mudo de assunto",
                afirmacao: "Ao errar, você tenta esquecer o que fez."
            },
            {
                texto: "Peço sinceras desculpas",
                afirmacao: "Você prefere assumir a responsabilidade pelas próprias ações."
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas ();
}

function mostraAlternativas() {
    for(const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta ();
