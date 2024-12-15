// Static Movie Database with Trailers (Can be replaced with API data later)
const movieData = [
    {
        title: "Goodfellas",
        year: 1990,
        rating: 4.7,
        director: "Martin Scorsese",
        genre: "Crime, Drama",
        description: "The story of Henry Hill and his life in the mob",
        image: "../assets/movies/goodfellas/goodfellas.jpg",
        trailer: "2ilzidi_J8Q",
        cast: ["Robert De Niro", "Joe Pesci", "Ray Liotta", "Lorraine Bracco", "Paul Sorvino"]
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        rating: 4.8,
        director: "Quentin Tarantino",
        genre: "Crime, Drama",
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine",
        image: "../assets/movies/pulp-fiction/pulp-fiction.jpg",
        trailer: "tGpTpVyI_OQ",
        cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis", "Tim Roth"]
    },
    {
        title: "Toy Story",
        year: 1995,
        rating: 4.6,
        director: "John Lasseter",
        genre: "Animation, Adventure",
        description: "A cowboy doll is profoundly threatened when a new spaceman figure supplants him as top toy",
        image: "../assets/movies/toy-story/toy-story.jpg",
        trailer: "v-PjgYDrg70",
        cast: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney", "Wallace Shawn"]
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 4.9,
        director: "Frank Darabont",
        genre: "Drama",
        description: "Two imprisoned men bond over a number of years through acts of common decency",
        image: "../assets/movies/shawshank-redemption/shawshank-redemption.jpg",
        trailer: "NmzuHjWmXOc",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"]
    },
    {
        title: "Titanic",
        year: 1997,
        rating: 4.5,
        director: "James Cameron",
        genre: "Drama, Romance",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic",
        image: "../assets/movies/titanic/titanic.jpg",
        trailer: "I7c1etV7D7g",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Frances Fisher"]
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 4.7,
        director: "The Wachowskis",
        genre: "Action, Sci-Fi",
        description: "A computer programmer discovers that reality as he knows it is a simulation created by machines",
        image: "../assets/movies/matrix/matrix.jpg",
        trailer: "vKQi3bBA1y8",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"]
    },
    {
        title: "Terminator 2: Judgment Day",
        year: 1991,
        rating: 4.6,
        director: "James Cameron",
        genre: "Action, Sci-Fi",
        description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son",
        image: "../assets/movies/terminator-2/terminator-2.jpg",
        trailer: "CRRlbK5w8AE",
        cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong", "Robert Patrick", "Joe Morton"]
    },
    {
        title: "Forrest Gump",
        year: 1994,
        rating: 4.8,
        director: "Robert Zemeckis",
        genre: "Drama, Romance",
        description: "Historical events unfold from the perspective of an Alabama man",
        image: "../assets/movies/forrest-gump/forrest-gump.jpg",
        trailer: "XHhAG-YLdk8",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field", "Mykelti Williamson"]
    },
    {
        title: "The Lion King",
        year: 1994,
        rating: 4.7,
        director: "Roger Allers, Rob Minkoff",
        genre: "Animation, Adventure",
        description: "Lion prince Simba and his father are targeted by his bitter uncle",
        image: "../assets/movies/lion-king/lion-king.jpeg",
        trailer: "lFzVJEksoDY",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Jonathan Taylor Thomas", "Moira Kelly"]
    },
    {
        title: "Jurassic Park",
        year: 1993,
        rating: 4.6,
        director: "Steven Spielberg",
        genre: "Action, Adventure",
        description: "A theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok",
        image: "../assets/movies/jurassic-park/jurassic-park.jpg",
        trailer: "_jKEqDKpJLw",
        cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Bob Peck"]
    }
];

// Update the movieData array by adding price and discount to each movie
movieData.forEach(movie => {
    movie.price = "$19.99";  // Add default price
    movie.discount = "40% OFF";  // Add default discount
});

console.log("Movie prices and discounts added");

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.querySelector('.progress');
const visitorCount = document.getElementById('visitorCount');
const messageEl = document.querySelector('.loading-text .blink');

// Loading Sequence
function simulateLoading() {
    const messages = [
        'LOADING MOVIE DATABASE...',
        'INITIALIZING RETRO GRAPHICS...',
        'READY TO BROWSE!'
    ];

    let currentMessage = 0;
    document.body.classList.add('loading');

    const interval = setInterval(() => {
        if (currentMessage >= messages.length) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.classList.remove('loading');
                initializeSite();
            }, 500);
        } else {
            if (messageEl) {
                messageEl.textContent = `> ${messages[currentMessage]}`;
            }
            currentMessage++;
        }
    }, 1000);
}

// Add it to initializeSite function
function initializeSite() {
    createDotBorder();
    displayFeaturedMovie();
    displayTopMovies();
    displayNewReleases();
    startVisitorCounter();
    addRetroEffects();
    initializeSearch();
}

// Add this function to create the dots
function createDotBorder() {
    const topDots = document.querySelector('.top-dots');
    const bottomDots = document.querySelector('.bottom-dots');

    // Create 48 dots for both top and bottom
    const dots = Array(32).fill('•').join(' ');

    if (topDots) topDots.textContent = dots;
    if (bottomDots) bottomDots.textContent = dots;
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.go-button');
    const searchSelect = document.querySelector('.search-dropdown');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            handleSearch(searchInput.value, searchSelect.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value, searchSelect.value);
            }
        });
    }
}

// Update the search handling in main.js
function handleSearch(query, type = 'all') {
    if (!query.trim()) {
        showRetroAlert('PLEASE ENTER A SEARCH TERM');
        return;
    }

    const results = searchMovies(query, type);
    showSearchResults(results, query);
}

// Function to search the movie data
function searchMovies(query, type) {
    return movieData.filter(movie => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            movie.title.toLowerCase().includes(lowerCaseQuery) ||
            movie.director.toLowerCase().includes(lowerCaseQuery) ||
            movie.genre.toLowerCase().includes(lowerCaseQuery)
        );
    });
}

function showSearchResults(results, query) {
    const modal = document.getElementById('searchModal');
    const titleElement = modal.querySelector('.search-results-title');
    const resultsContainer = modal.querySelector('.search-results-container');

    titleElement.textContent = `FOUND ${results.length} MATCHES FOR: "${query.toUpperCase()}"`;

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <div class="blink">> NO RESULTS FOUND</div>
                <div style="margin-top: 10px;">TRY DIFFERENT SEARCH TERMS</div>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = results.map(movie => `
            <div class="search-result-card">
                <img src="${movie.image}" alt="${movie.title}" class="result-image">
                <div class="result-details">
                    <div class="result-title">${movie.title.toUpperCase()} (${movie.year})</div>
                    <div class="result-info">Director: ${movie.director}</div>
                    <div class="result-info">Genre: ${movie.genre}</div>
                    <div class="result-info">Rating: ${movie.rating}/5</div>
                    <div class="result-info" style="margin-top: 10px;">${movie.description}</div>
                    <button onclick="showTrailer('${movie.title}')" 
                            class="watch-trailer-btn" 
                            style="margin-top: 15px;">
                        WATCH TRAILER
                    </button>
                </div>
            </div>
        `).join('');
    }

    modal.style.display = 'flex';

    // Close button functionality
    const closeBtn = modal.querySelector('.retro-close-btn');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close on click outside
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Close on Escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

// Add a retro alert function
function showRetroAlert(message) {
    console.log('Showing retro alert:', message);
    const alertModal = document.createElement('div');
    alertModal.className = 'retro-alert-modal';
    alertModal.innerHTML = `
        <div class="retro-alert-content">
            <div class="blink">> ${message}</div>
            <button class="retro-button" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    document.body.appendChild(alertModal);
}

function showTrailer(title) {
    const movie = movieData.find(m => m.title === title);
    if (!movie || !movie.trailer) return;

    const modal = document.createElement('div');
    modal.className = 'trailer-modal';
    modal.innerHTML = `
        <div class="trailer-container">
            <div class="trailer-header">
                <div class="trailer-title">
                    ${movie.title.toUpperCase()} - OFFICIAL TRAILER
                </div>
                <button onclick="closeTrailer()" class="close-button">×</button>
            </div>
            <div class="trailer-loading blink">LOADING TRAILER...</div>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/${movie.trailer}?autoplay=1&modestbranding=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                onload="this.previousElementSibling.style.display='none'">
            </iframe>
        </div>
    `;
    document.body.appendChild(modal);

    // Add escape key listener
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            closeTrailer();
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

function closeTrailer() {
    const modal = document.querySelector('.trailer-modal');
    if (modal) {
        modal.remove();
    }
}

// Function to generate random poll options
function generatePollOptions() {
    const pollOptions = getRandomMovies(3);

    const pollOptionsHTML = pollOptions.map(movie => `
      <input type="radio" name="movie-sequel" value="${movie.title}">
      <label>${movie.title.toUpperCase()} (${movie.year})</label>
    `).join('');

    const pollOptionsContainer = document.querySelector('.poll-options');
    pollOptionsContainer.innerHTML = pollOptionsHTML;
}

// Function to handle the voting poll
function handleVote() {
    const voteButton = document.querySelector('.vote-button');
    let pollResultsContainer = document.querySelector('.poll-results');

    voteButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="movie-sequel"]:checked');

        if (!selectedOption) {
            showRetroAlert('PLEASE SELECT A MOVIE SEQUEL OPTION');
            return;
        }

        const selectedMovie = selectedOption.value;
        updatePollResults(selectedMovie, pollResultsContainer);

        // Disable the vote button to prevent multiple votes
        disableVoteButton(voteButton);
    });
}

// Function to update the poll results
function updatePollResults(selectedMovie, pollResultsContainer) {
    // Find the selected movie in the movieData array
    const pollData = movieData.find(movie => movie.title === selectedMovie);

    // Initialize the vote count to 1 (since this is the first vote)
    let voteCount = 1;

    // Check if the selected movie already has a vote count in the movieData array
    const existingVoteIndex = movieData.findIndex(movie => movie.title === selectedMovie);
    if (existingVoteIndex !== -1) {
        voteCount = movieData[existingVoteIndex].voteCount ? movieData[existingVoteIndex].voteCount + 1 : 1;
    }

    // Update the movieData array with the new vote count
    movieData[existingVoteIndex] = { ...pollData, voteCount };

    // Update the poll results container
    pollResultsContainer.innerHTML = `
      <div class="poll-result">
        <div class="poll-title">${pollData.title.toUpperCase()} (${pollData.year})</div>
        <div class="poll-votes">${voteCount} VOTE${voteCount !== 1 ? 'S' : ''}</div>
      </div>
    `;

    setTimeout(() => {
        enableVoteButton(voteButton);
    }, 5000);
}

// Function to disable the vote button
function disableVoteButton(voteButton) {
    voteButton.disabled = true;
    voteButton.classList.add('vote-button--disabled');
    voteButton.style.cursor = 'url("../assets/cursors/unavailable.cur"), not-allowed';
}

// Function to enable the vote button
function enableVoteButton(voteButton) {
    voteButton.disabled = false;
    voteButton.classList.remove('vote-button--disabled');
    voteButton.style.cursor = 'url("../assets/cursors/Link\ Select.cur"), pointer';
}

// Function to get random movies
function getRandomMovies(count) {
    const shuffled = [...movieData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to initialize the voting poll
function initializeVotingPoll() {
    generatePollOptions();
    handleVote();
}

// Display featured movie
function displayFeaturedMovie() {
    const featured = getRandomMovies(1)[0];
    const featuredSection = document.querySelector('.featured-movie');
    if (featuredSection && featured) {
        featuredSection.innerHTML = `
            <img src="${featured.image}" alt="${featured.title}">
            <h3 class="movie-title">${featured.title.toUpperCase()}</h3>
            <div class="movie-year">${featured.year}</div>
            <div class="movie-rating">RATING: ${featured.rating}/5</div>
            <button 
                onclick="showTrailer('${featured.title}')" 
                class="watch-trailer-btn"
            >
                Watch Trailer
            </button>
        `;
    }
}

// Display top movies
function displayTopMovies() {
    const topMovies = getTopRatedMovies(10);
    const dvdList = document.querySelector('.dvd-list');  
    if (dvdList) {
        dvdList.innerHTML = topMovies.map(movie => `
            <div class="dvd-item">
                <div class="dvd-title">${movie.title.toUpperCase()}</div>
                <div class="dvd-details">
                    <span class="dvd-year">${movie.year}</span>
                    <span class="dvd-price">
                        ${movie.price} 
                        <span class="dvd-discount">${movie.discount}</span>
                    </span>
                </div>
            </div>
        `).join('');
    }
}

// Display new releases
function displayNewReleases() {
    const newReleases = getRandomMovies(3);
    const movieList = document.querySelector('.movie-list');
    if (movieList) {
        movieList.innerHTML = newReleases.map(movie => `
            <li>
                <a href="#" onclick="showMovieDetails('${movie.title}')">
                    ${movie.title.toUpperCase()} (${movie.year})
                </a>
            </li>
        `).join('');
    }
}

// Utility functions
function getRandomMovies(count) {
    const shuffled = [...movieData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getTopRatedMovies(count) {
    return [...movieData]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, count);
}

// Visitor Counter
function startVisitorCounter() {
    let count = 1;
    setInterval(() => {
        if (visitorCount) {
            count++;
            visitorCount.textContent = String(count).padStart(6, '0');
        }
    }, 10000);
}

// Retro Effects
function addRetroEffects() {
    document.querySelectorAll('button, .movie-card, .nav-link').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
}

// Search functionality
// function initializeSearch() {
//     const searchInput = document.querySelector('.search-input');
//     const searchButton = document.querySelector('.go-button');

//     if (searchButton && searchInput) {
//         searchButton.addEventListener('click', () => {
//             handleSearch(searchInput.value);
//         });

//         searchInput.addEventListener('keypress', (e) => {
//             if (e.key === 'Enter') {
//                 handleSearch(searchInput.value);
//             }
//         });
//     }
// }

// // Handle search
// function handleSearch(query) {
//     if (!query) {
//         alert('Please enter a search term!');
//         return;
//     }

//     document.body.classList.add('loading');

//     setTimeout(() => {
//         const results = movieData.filter(movie =>
//             movie.title.toLowerCase().includes(query.toLowerCase()) ||
//             movie.director.toLowerCase().includes(query.toLowerCase()) ||
//             movie.genre.toLowerCase().includes(query.toLowerCase())
//         );

//         alert(`Found ${results.length} matches for: "${query}"`);
//         document.body.classList.remove('loading');
//     }, 1500);
// }

// Show movie details
function showMovieDetails(title) {
    const movie = movieData.find(m => m.title === title);
    if (!movie) return;

    document.body.classList.add('loading');

    setTimeout(() => {
        alert(
            `${movie.title} (${movie.year})\n\n` +
            `Director: ${movie.director}\n` +
            `Genre: ${movie.genre}\n` +
            `Rating: ${movie.rating}/5\n\n` +
            `Description:\n${movie.description}`
        );
        document.body.classList.remove('loading');
    }, 1000);
}

function createPeopleSection() {
    // Get the people section element
    const peopleSection = document.querySelector('.people-section');
  
    // Get the people content element
    const peopleContent = peopleSection.querySelector('.people-content');
  
    // Create the cast list container
    const castListContainer = document.createElement('div');
    castListContainer.classList.add('cast-container');
  
    // Check if movieData is available
    if (movieData && movieData.length > 0) {
      // Loop through the movieData and add each movie's cast
      movieData.forEach((movie) => {
        const castCard = document.createElement('div');
        castCard.classList.add('cast-card');
  
        // Movie title
        const movieTitle = document.createElement('h3');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title.toUpperCase();
        castCard.appendChild(movieTitle);
  
        // Cast list
        const castList = document.createElement('ul');
        castList.classList.add('cast-list');
        movie.cast.forEach((actor) => {
          const castItem = document.createElement('li');
          castItem.classList.add('cast-item');
          castItem.textContent = actor;
          castList.appendChild(castItem);
        });
        castCard.appendChild(castList);
  
        castListContainer.appendChild(castCard);
      });
  
      peopleContent.appendChild(castListContainer);
    } else {
      // Display a message when movieData is not available
      const noDataMessage = document.createElement('div');
      noDataMessage.classList.add('no-data-message');
      noDataMessage.textContent = 'No cast information available.';
      peopleContent.appendChild(noDataMessage);
    }
  }


// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    simulateLoading();
    initializeVotingPoll();
    createPeopleSection();
});