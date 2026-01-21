# Find Your Robot

<img width="716" height="631" alt="image" src="https://github.com/user-attachments/assets/f934b06d-7df0-46d4-a08a-e90132d244fa" />

This vanilla JS website finds your perfect robot based on your name and age, using the RoboHash API! Built with plain HTML, CSS and JavaScript.

## Technologies used
- **RoboHash API** – used to generate unique robot images based on user input ([robohash.org](https://robohash.org/))

## Setup

1. Run a basic HTTP server

```sh
# Python 3
python3 -m http.server 8000

# then open http://localhost:8000 in your browser
```

2. Navigate to http://localhost:3000

## Project structure

- `index.html` — main page and entry point
- `script.js` — application JavaScript
- `css/` — stylesheet folder
  - `global.css`, `site.css`, and several component stylesheets (header, footer, form, cards, etc.)
- `images/` — images and assets
