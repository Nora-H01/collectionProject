# My Video Game Collection

- Type of Challenge: `consolidation`
- Duration: `1 day`
- Team challenge: `Solo`

## The challenge

The goal of this project will be to summarize our current knowledge of :

- HTML and CSS
- Responsive design
- Javascript Basics
- The DOM

to create a collection of items. 
This project will be split up in two parts.

---

### What Are We Going to Build?

In this challenge, I've created a collection of video games that I've loved making. The collection will include cards for each video game, with relevant details such as title, release date, genre, description and so on.

I'll bring the collection to life using JavaScript and make sure it's both functional and responsive for an optimal user experience.

## Step 1: Gathering My Collection

My first task is to compile a list (Array) of my favorite video games. Try to include at least 10 games in my collection.

What information should you include?
For each game, at least 5 properties. Here's what I've included:

Game title: The name of the game.
Release year: The date the game was released.
Genre: The type of game (e.g. action, RPG, strategy).
Developer: The studio or company behind the game.
Brief description: A few sentences describing the game.
Platform(s): The consoles or devices on which the game is available.
Cover: An image of the game's cover or a promotional image.

## Translate this to javascript

Once the above step is done, 

Create a file javescript for `const collection` and structure my data as in the following example.

```javascript
const collection = [
  title: 'Elden Ring',
    releaseYear: 2022,
    developer: 'FromSoftware',
    genre: ['Action RPG'],
    description: 'A dark and mysterious world crafted by Hidetaka Miyazaki and George R. R. Martin.',
    platforms: ['PC', 'PS5', 'Xbox Series X/S'],
    coverArt: 'link/to/image.jpg',
  },
  // Add at least 9 more games!
];
```

### Translate this into HTML

Create a card for each game using JavaScript to dynamically populate the properties from my collection.

Each card should display the following:

The cover art (as a background image or <img>).
The genre(s).
The game title.
The studio.
The release year and developer.
The description.

Create my own design, using grid and/or bending techniques, and create the corresponding HTML skeleton and css file (no frameworks).

Once that's done, I display your collection in a nice, **responsive** way in my html body.
