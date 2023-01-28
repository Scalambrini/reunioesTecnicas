// Cria o array com 12 itens
var advogados = ["Alessandra Mie Ikehara Katori", 
                 "Beatriz Ferreira Baschiera",
                 "Bruna Ferreira Costa", 
                 "Bruno Lopes Teixeira", 
                 "Bruno Paranhos Fleury", 
                 "Camila Amaral dos Santos", 
                 "Gabriela Mota Bastos", 
                 "Gabriela Sampaio Lunardelli", 
                 "Isabela Garcia Funaro Ruiz", 
                 "Maria Beatriz Beatriz Silva Almeida", 
                 "Otávio Abreu Caiafa", 
                 "Sâmia Ali Salman"];

// Embaralhando o array

advogados.sort(function() {
    return 0.5 - Math.random();
});


// Criando uma variável para armazenar o HTML de saída
  var output = "";

// Loop para adicionar cada elemento do array à variável de saída
  for (var i = 0; i < advogados.length; i++) {
    output += "<p>" + advogados[i] + "</p>";
  }

// Função Exibindo o HTML gerado na div com ID "output"

function imprime(){
    document.getElementById("output").innerHTML = output;
};

// Função para atualizar a página após clicar no botão

function atualizarPagina() {
    location.href = location.href;

  };


//Atribuindo função ao botão para sortear elementos do array

var btn = document.getElementById("sort");

btn.addEventListener("click", imprime(), atualizarPagina());






