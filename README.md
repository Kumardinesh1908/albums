# Albums
Building a Dynamic Albums Management App using the power of React for front-end development, Tailwind CSS for styling, and Axios for handling HTTP requests.

# Features
- Add new albums with a custom title.
- Delete existing albums from the list.
- Update existing title with a custom title.
- Efficient use of React and Axios for data management.
- Utilizes Tailwind CSS for styling and layout.

# Folder Structure
The project follows the following structure:

├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddAlbumButton.js
│   │   └── UpdateAlbumButton.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.css       
├── package.json
└── README.md

├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AddAlbumButton.js
│ │ ├── UpdateAlbumButton.js
│ ├── App.js
│ ├── index.js
│ └── styles/
│ └── tailwind.css
├── package.json
└── README.md

- `/public`: Directory containing public assets.
  - `index.html`: Main HTML file.
- `/src`: Source code directory.
  - `/components`: Directory for React components.
    - `AddAlbumButton.js`: Component for adding new albums.
    - `UpdateAlbumButton.js`: Component for updating album titles.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
  - `/styles`: Styles directory.
    - `tailwind.css`: Tailwind CSS configuration.
- `package.json`: Project's package configuration.
- `README.md`: The document you are reading right now.

- The public folder contains the main HTML file and favicon Icon.
- The src folder contains React components, App.js file, the main index.js and styles.
- The components folder holds the React button components.

# Getting Started
Follow these steps to set up and run the project on your local machine.

## Prerequisites
- Node.js (npm will be installed with Node.js)
  
## Installation
1. Clone the repository:
```bash
git clone https://github.com/Kumardinesh1908/albums.git
```

2. Navigate to the project directory:
```bash
cd albums-management-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run start
```

5. Access the app in your browser at http://localhost:3000.
   
# Usage
- Click the "Add Album" button to create new albums.
- Use the "Update" button to modify album titles.
- Press the "Delete" button to remove albums from the list.
