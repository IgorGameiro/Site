function pesquisar() {
    //console.log(dados);//
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    //se o campoPesquisa for uma string sem nada 
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    
    console.log(campoPesquisa);
    console.log(section);
    let resultados = ""
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        //se no dados titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
    <h2>${dado.titulo}</h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}"
        target="_blank">Mais
        informações</a>
</div>
`
        }


    }
    section.innerHTML = resultados;
}
//console.log(dados);//
let section = document.getElementById("resultados-pesquisa")
console.log(section);
let resultados = ""
//para cada dado dentro da lista de dados
for (let dado of dados) {
    resultados += `<div class="item-resultado">
    <h2>${dado.titulo}</h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}"
        target="_blank">Mais
        informações</a>
</div>
`
}
section.innerHTML = resultados;

