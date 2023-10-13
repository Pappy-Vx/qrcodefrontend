const updateMovies = async () => {
    try {
        const response = await fetch('https://qrcode-cz3n.onrender.com/qr/data');
        const data = await response.json();
        const movies = data.movies; // Assuming 'movies' is an array of movies

        // Randomly select 10 movies
        const selectedMovies = getRandomMovies(movies, 20);


        // Update the movie data properties for 10 div elements
        for (let i = 1; i <= 10; i++) {
            const movieElement = document.getElementById(`movie${i}`);
            movieElement.innerHTML = `<img src=${selectedMovies[i-1].Images[0]} >`
            movieElement.innerHTML += `<h2>${selectedMovies[i - 1].Title}</h2>`;
            movieElement.innerHTML += `<p>Year: ${selectedMovies[i - 1].Year}</p>`;
            // Add more properties as needed
        }

    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

// Initial update
updateMovies();

// Periodically update the QR code and movie data every 10 seconds
setInterval(updateMovies, 10000);

// Function to randomly select 'n' items from an array
function getRandomMovies(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}
