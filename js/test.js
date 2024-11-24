const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value;

    // Simulando uma busca (substitua por sua lógica de busca real)
    const searchResultsData = [
        { title: 'Página 1', url: '/pagina1' },
        { title: 'Página 2', url: '/pagina2' },
        // ... mais resultados
    ];

    // Limpando os resultados anteriores
    searchResults.innerHTML = '';

    // Criando os elementos HTML para os resultados
    searchResultsData.forEach((result) => {
        const resultElement = document.createElement('a');
        resultElement.href = result.url;
        resultElement.textContent = result.title;
        searchResults.appendChild(resultElement);
    });
});