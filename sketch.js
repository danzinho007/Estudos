function setup() {
    createCanvas(400, 400);
  }
// O canvas é uma tela virtual onde desenhamos e criamos elementos gráficos com código. É amplamente utilizado em jogos, animações e outros tipos de aplicativos que requerem desenho interativo em tempo real. Ele pode ser criado e manipulado através de APIs de desenho 2D ou 3D, como a API do HTML5 Canvas ou a biblioteca gráfica p5.js. A principal vantagem do canvas é a sua capacidade de criar e manipular elementos gráficos de maneira dinâmica e eficiente, tornando-o uma ferramenta versátil para muitos tipos de projetos interativos.
// Referência https://p5js.org/reference/

function draw() {
    background(255, 255, 255);
    fill(255, 255, 255);
    rect(100, 50, 300, 300);
    fill(255, 0, 0);
    ellipse(250, 200, 100, 100);
}
  
// A ordem dos desenhos importa
// A razão pela qual a elipse foi criada no meio é porque as coordenadas x e y foram especificadas como o meio da tela (ou seja, o ponto de coordenadas x = largura da tela / 2 e y = altura da tela / 2). A função ellipse desenha uma elipse com base nas coordenadas x e y especificadas como seu centro. Então, ao especificar as coordenadas x e y como o meio da tela, a elipse será desenhada no meio da tela.

// Função ellipse()
// A função ellipse() é uma das funções básicas do p5.js, que é uma biblioteca JavaScript para criar aplicativos interativos com base na linguagem Processing. A função ellipse() é usada para desenhar uma elipse (ou círculo) em um canvas.
// Sintaxe ellipse(x, y, w, h)
// x e y são as coordenadas do centro da elipse no canvas.
// w é a largura da elipse.
// h é a altura da elipse.

// Função fill()
// A função fill() é uma função da biblioteca P5.js que define a cor de preenchimento de formas geométricas como retângulos, círculos, elipses, polígonos, etc. Essa função é usada antes da chamada da forma geométrica, para que ela possa ser preenchida com a cor desejada.

// Função rect()
// A função rect é uma função do p5.js que desenha um retângulo no canvas. Ela é usada para desenhar formas geométricas básicas, como retângulos e quadrados, na tela.
// Sintaxe : rect(x, y, width, height)
// x é a coordenada x do canto superior esquerdo do retângulo.
// y é a coordenada y do canto superior esquerdo do retângulo.
// width é a largura do retângulo.
// height é a altura do retângulo.
// Além disso, a função rect também pode ter um argumento opcional que especifica a forma dos cantos do retângulo. Por exemplo:
// rect(x, y, width, height, r)
// Onde r especifica o raio dos cantos do retângulo.
