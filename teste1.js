// Definindo variáveis de estado dos switches
let switch1 = false;
let switch2 = false;

// Função para executar as ações com base no estado dos switches
function executarAcoes(pagina) {
    if (pagina === 1) {
        console.log("Mensagem");
        console.log("Fica transparente");
        console.log("Anda 2 casas pra direita");
        console.log("Volta a ser fixo");
        switch1 = true;
    } else if (pagina === 2 && switch1) {
        console.log("Fica transparente");
        console.log("Anda 2 casas pra esquerda");
        console.log("Volta a ser fixo");
        switch1 = false;
        switch2 = true;
    } else if (pagina === 3 && switch2) {
        console.log("Fica transparente");
        console.log("Anda 2 casas pra direita");
        console.log("Volta a ser fixo");
        switch2 = false;
        switch1 = true;
    }
}

// Executando as ações na página 1
executarAcoes(1);

// Executando as ações na página 2
executarAcoes(2);

// Executando as ações na página 3
executarAcoes(3);
