window.onload = function() {

    // banco de dados local em json
    const bando_de_dados = {
        "biotipos": [
        {
            "id":1,
            "nome":"Ectomorfo",
            "descricao":"Biotipo ectomorfo é caracterizado por uma baixa porcentagem de gordura corporal e uma alta porcentagem de massa muscular."
        },
        {
            "id":2,
            "nome":"Mesomorfo",
            "descricao":"Biotipo mesomorfo é caracterizado por uma média porcentagem de gordura corporal e uma média porcentagem de massa muscular."
        },
        {
            "id":3,
            "nome":"Endomorfo",
            "descricao":"Biotipo endomorfo é caracterizado por uma alta porcentagem de gordura corporal e uma baixa porcentagem de massa muscular."
        }
        ],
        "treinos": [
        {
            "id":1,
            "nome":"Treino de Peito",
            "descricao":"Treino de peito é um treino que visa desenvolver a musculatura do peito.",
            // "biotipo":1
        },
        {
            "id":2,
            "nome":"Treino de Costa",
            "descricao":"Treino de costa é um treino que visa desenvolver a musculatura da costa.",
            // "biotipo":2
        },
        {
            "id":3,
            "nome":"Treino de Triceps",
            "descricao":"Treino de triceps é um treino que visa desenvolver a musculatura dos triceps.",
            // "biotipo":3
        }
        ]
    }

    // efeito em js para barra de pesquisa
    document.getElementById('botao_pesquisa').addEventListener('click', function() {
        var campo_pesquisa = document.getElementById('campo_pesquisa');
        campo_pesquisa.classList.toggle('show');
        campo_pesquisa.focus();
    });
  
    document.addEventListener('click', function(event) {
        var clicou_input = document.getElementById('div_header_4').contains(event.target);
        var campo_pesquisa = document.getElementById('campo_pesquisa');
  
        if (!clicou_input && campo_pesquisa.classList.contains('show')) {
            campo_pesquisa.classList.remove('show');    
            this.location.reload();
        }else{
            campo_pesquisa.value = '';
            buscaBiotipos();
            buscaTreinos();
        }
    });

    // adicionando campos id em variáveis
    const campo_pesquisa = document.getElementById('campo_pesquisa');
    const resultados_treinos = document.getElementById('resultados_treinos');
    const resultados_biotipos = document.getElementById('resultados_biotipos');
    
    // evento de input no campo de pesquisa
    // que chama as funções buscaTreinos e buscaBiotipos
    campo_pesquisa.addEventListener('input', function() {
        buscaTreinos();
        buscaBiotipos();        
    });

    // função que busca as informações sobre os treinos
    function buscaTreinos() {

        const texto_pesquisa = campo_pesquisa.value.trim();

        if (texto_pesquisa !== '') {
          const resultados = bando_de_dados.treinos.filter(treino => {
            return treino.nome.toLowerCase().includes(texto_pesquisa.toLowerCase());
          });

          const resultadosHtml = resultados.map(treino => {
            return `
              <h2>${treino.nome}</h2>
              <p>${treino.descricao}</p>`              
            ;
          }).join('');

          resultados_treinos.innerHTML = resultadosHtml;
        } else {        
            resultados_treinos.innerHTML = '';            
        }
    }
    
    // função que busca as informações sobre os biotipos
    function buscaBiotipos() {

        const texto_pesquisa = campo_pesquisa.value.trim();

        if (texto_pesquisa !== '') {
          const resultados = bando_de_dados.biotipos.filter(biotipo => {
            return biotipo.nome.toLowerCase().includes(texto_pesquisa.toLowerCase());
          });

          const resultadosHtml = resultados.map(biotipo => {
            return `
              <h2>${biotipo.nome}</h2>
              <p>${biotipo.descricao}</p>`;
          }).join('');

          resultados_biotipos.innerHTML = resultadosHtml;
        } else {
            resultados_biotipos.innerHTML = '';
        }
    }
}