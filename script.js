import { collection } from '../3_Collection-project/collection.js';

const container = document.getElementById('collection-container');

collection.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  // Img
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
    genreTag.classList.add(index % 2 === 0 ? 'genre-yellow' : 'genre-blue'); // Alternance de couleur
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

  // Years
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

  card.appendChild(img);
  card.appendChild(genresContainer);
  card.appendChild(title);
  card.appendChild(studio);
  card.appendChild(releaseYear);
  card.appendChild(summary);
  card.appendChild(rating);

  container.appendChild(card);
});