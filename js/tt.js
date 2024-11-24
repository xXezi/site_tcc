window.onload = function() {

    const bando_de_dados = {
        "biotipos": [
            {
                "id": 1,
                "nome": "Ectomorfo",
                "descricao": "Biotipo ectomorfo é caracterizado por uma baixa porcentagem de gordura corporal e uma alta porcentagem de massa muscular.",
                "url": "ectomorfo.html"
            },
            {
                "id": 2,
                "nome": "Mesomorfo",
                "descricao": "Biotipo mesomorfo é caracterizado por uma média porcentagem de gordura corporal e uma média porcentagem de massa muscular.",
                "url": "mesomorfo.html"
            },
            {
                "id": 3,
                "nome": "Endomorfo",
                "descricao": "Biotipo endomorfo é caracterizado por uma alta porcentagem de gordura corporal e uma baixa porcentagem de massa muscular.",
                "url": "endomorfo.html"
            }
        ],
        "treinos": [
            {
                "id": 1,
                "nome": "Treino de Peito",
                "descricao": "Treino de peito é um treino que visa desenvolver a musculatura do peito.",
                "url": "treino-peito.html"
            },
            {
                "id": 2,
                "nome": "Treino de Costa",
                "descricao": "Treino de costa é um treino que visa desenvolver a musculatura da costa.",
                "url": "treino-costa.html"
            },
            {
                "id": 3,
                "nome": "Treino de Triceps",
                "descricao": "Treino de triceps é um treino que visa desenvolver a musculatura dos triceps.",
                "url": "treino-triceps.html"
            }
        ]
    };

    const campo_pesquisa = document.getElementById('campo_pesquisa');
    const resultados_treinos = document.getElementById('resultados_treinos');
    const resultados_biotipos = document.getElementById('resultados_biotipos');

    campo_pesquisa.addEventListener('input', function() {
        const texto_pesquisa = campo_pesquisa.value.trim().toLowerCase();

        if (texto_pesquisa !== '') {
            exibirResultados('biotipos', texto_pesquisa, resultados_biotipos);
            exibirResultados('treinos', texto_pesquisa, resultados_treinos);
        } else {
            resultados_biotipos.innerHTML = '';
            resultados_treinos.innerHTML = '';
        }
    });

    function exibirResultados(categoria, texto_pesquisa, elemento) {
        const resultados = bando_de_dados[categoria].filter(item =>
            item.nome.toLowerCase().includes(texto_pesquisa)
        );

        if (resultados.length > 0) {
            const categoriaCapitalizada = categoria.charAt(0).toUpperCase() + categoria.slice(1);

            elemento.innerHTML = `
                <h3>${categoriaCapitalizada}</h3>
                <ul>
                    ${resultados.map(item => `
                        <li>
                            <a href="${item.url}" target="_blank">
                                <strong>${item.nome}</strong>: ${item.descricao}
                            </a>
                        </li>
                    `).join('')}
                </ul>`;
        } else {
            elemento.innerHTML = `<p>Nenhum resultado encontrado para ${categoria}.</p>`;
        }
    }
};