document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById("result");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    function fetchSuperheroes(query = "") {
        
        fetch(`superheroes.php${query ? '?query=' + encodeURIComponent(query) : ''}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            });
    }

    // Show full list 
    fetchSuperheroes();

    
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        fetchSuperheroes(query);
    });
});
