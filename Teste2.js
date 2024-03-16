const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function interagirComNPC(resposta) {
    if (resposta.toLowerCase() === 'sim') {
        console.log("1 = 90°");
        console.log("2 = 180°");
        console.log("3 = 270°");

        rl.question("Escolha uma opção (1, 2 ou 3): ", (opcao) => {
            switch (opcao) {
                case '1':
                    console.log("Gira 90°");
                    break;
                case '2':
                    console.log("Gira 180°");
                    break;
                case '3':
                    console.log("Gira 270°");
                    break;
                default:
                    console.log("Reverte");
            }
            rl.close();
        });
    } else {
        console.log("Reverte");
        rl.close(); // 
    }
}
rl.question("Você quer que eu gire? (sim/não) ", (resposta) => {
    interagirComNPC(resposta);
});
