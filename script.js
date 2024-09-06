function pesquisar() {
    let pesquisaInput = document.getElementById('pesquisa').value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""

    for (let dado of dados) {
        if (dado.nome.toLowerCase().includes(pesquisaInput)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                    <p class="info-meta">${dado.escola} ${dado.nível} | Alcance: ${dado.alcance} | Duração: ${dado.duração} | Jogada de Proteção: ${dado.jogada_protecao}</p>
                    <p>${dado.efeitos}</p>
                    <p class="info-meta">Fonte: ${dado.fonte}</p>
            </div>
            `;
        }
    }

    section.innerHTML = resultados
};

