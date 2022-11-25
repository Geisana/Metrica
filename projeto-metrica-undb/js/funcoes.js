
function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto){
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if(nome == "") {
        alert("Favor preencher nome do produto.");
    } else if (codigo == "") {
        alert("Favor preencher o código do produto.");
    } else cadastrarProduto (nome, codigo, qtidade);


}

function cadastrarProduto (produto, codig, qtidade) {
    let novoProduto = {nome: produto, codigo:codig, quantidade: qtidade};

    if(typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastrados com sucesso "+qtidade+ " Kg do produto "+ produto + "!");
        atualizarTotalEstoque ("totalEstoque");
        location.reload();
    }
    else alert ("A versão do seu navegador é muito antigo. Por isso, não será possível executar essa aplicação. ")
}

function atualizarTotalEstoque (idCampo) {
    localStorage.setItem("totalEstoque", ++document.getElementById(idCampo).innerHTML)
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if(totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque; 
    }
    else alert("A versão do seu navegador é muito antigo. Por isso, não será possível executar essa aplicação. ")
}

function listarEstoque () {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write ("<h1> Estoque: </h1>");
        if(produtos == null)
        document.write("<h3> Ainda não há itens no estoque </h3)");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>"); 
                document.write("<li>Nome do produto: "+produto.nome+ "</li>");
                document.write("<li>Código do produto: "+produto.codigo+ "</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+ "</li>");
                document.write("</ul>");
            });
        }
    }
    else alert ("A versão do seu navegador é muito antigo. Por isso, não será possível executar essa aplicação. ")
}