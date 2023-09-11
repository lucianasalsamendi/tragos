
        function obtenerCocktail() {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const cocktail = data.drinks[0];
                    const nombre = cocktail.strDrink;
                    const imagen = cocktail.strDrinkThumb;

                    const resultadoDiv = document.getElementById('resultado');
                    resultadoDiv.innerHTML = `
                        <h2>${nombre}</h2>
                        <img src="${imagen}" alt="${nombre}">
                    `;
                })
                .catch(error => console.error('Error:', error));
        }
    