import { collection } from './collection.js';

const container = document.getElementById('collection-container');
const searchBar = document.createElement('input');

// Add a search bar to the DOM
searchBar.type = 'text';
searchBar.id = 'searchBar';
searchBar.placeholder = 'Search games by title...';
searchBar.style.marginBottom = '20px';
searchBar.style.padding = '10px';
searchBar.style.width = '100%';
searchBar.style.maxWidth = '400px';
document.body.insertBefore(searchBar, container);

// Function to create and render cards
const renderCards = (filteredCollection) => {
  container.innerHTML = ''; // Clear the container
  filteredCollection.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Image
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.classList.add('card-image');

    // Genres
    const genresContainer = document.createElement('div');
    genresContainer.classList.add('card-genres');
    item.genre.forEach((genre, index) => {
      const genreTag = document.createElement('span');
      genreTag.textContent = genre;
      genreTag.classList.add(index % 2 === 0 ? 'genre-yellow' : 'genre-blue'); // Alternate colors
      genresContainer.appendChild(genreTag);
    });

    // Title
    const title = document.createElement('h3');
    title.textContent = item.name;
    title.classList.add('card-title');

    // Studio
    const studio = document.createElement('p');
    studio.textContent = `Studio: ${item.studio}`;
    studio.classList.add('card-studio');

    // Release Year
    const releaseYear = document.createElement('p');
    releaseYear.textContent = `Release Year: ${item.releaseYear}`;
    releaseYear.classList.add('card-release-year');

    // Rating
    const rating = document.createElement('p');
    rating.textContent = `Rating: ${item.rating}`;
    rating.classList.add('card-rating');

    // Summary
    const summary = document.createElement('p');
    summary.textContent = item.summary;
    summary.classList.add('card-summary');

    // Append elements to card
    card.appendChild(img);
    card.appendChild(genresContainer);
    card.appendChild(title);
    card.appendChild(studio);
    card.appendChild(releaseYear);
    card.appendChild(summary);
    card.appendChild(rating);

    // Add hover effect
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      container.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      container.style.backgroundColor = 'transparent';
    });

    container.appendChild(card);
  });
};

// Initial rendering
renderCards(collection);

// Search functionality
searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredCollection = collection.filter(game =>
    game.name.toLowerCase().includes(searchTerm)
  );
  renderCards(filteredCollection);
});
