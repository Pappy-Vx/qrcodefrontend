const updateMovies = async () => {
    try {
        const response = await fetch('https://qrcode-cz3n.onrender.com/qr/data');
        const data = await response.json();
        const movies = data.movies; 

        const selectedMovies = getRandomMovies(movies, 20);

       
        for (let i = 1; i <= 10; i++) {
            const movieElement = document.getElementById(`movie${i}`);
            movieElement.innerHTML = `<img src=${selectedMovies[i-1].Images[0]} >`
            movieElement.innerHTML += `<h2>${selectedMovies[i - 1].Title}</h2>`;
            movieElement.innerHTML += `<p>Year: ${selectedMovies[i - 1].Year}</p>`;
            
        }

    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};


updateMovies();


setInterval(updateMovies, 10000);


function getRandomMovies(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}
