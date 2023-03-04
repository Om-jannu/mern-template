[![pr status](https://img.shields.io/badge/PR's-welcome-brightgreen)](https://img.shields.io/badge/PR's-welcome-brightgreen)  [![last commit](https://img.shields.io/github/last-commit/Om-jannu/mern-template)](https://img.shields.io/github/last-commit/Om-jannu/mern-template)

## Getting Started
_This is a template repository for creating_ **FullStack MERN Applications**.</br>
_I have tried to keep it very simple by separating_ **Clients** & **Server** _directories_.


<!--  INSTALLATION -->
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Om-jannu/mern-template.git
   ```
   
   After Cloning , The Folder structure will look like this

    ```
    mern-template
    ├── client
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── logo192.png
    │   │   ├── logo512.png
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   ├── README.md
    │   └── src
    │       ├── App.css
    │       ├── App.jsx
    │       ├── components
    │       │   ├── ComponentReadme.md
    │       │   ├── Home.jsx
    │       │   ├── homeStyle.css
    │       │   └── PageNotFound.jsx
    │       ├── index.js
    │       └── media
    │           └── images
    │               ├── 404-page.png
    │               └── mernlogo.png
    └── server
        ├── controller
        │   ├── ControllerReadme.md
        │   ├── homeController.js
        │   └── testController.js
        ├── dbConfig
        │   └── dbconnect.js
        ├── model
        │   └── ModelReadme.md
        ├── package.json
        ├── package-lock.json
        ├── routes
        │   └── homeRoute.js
        └── server.js
    ```
2. Change directories

    **Run Server**
    ```sh
    cd server
    npm start
    ```
    
    
    **Run Client**
    ```sh
    cd client
    npm start
    ```

### Built With

[![mongo db](https://img.shields.io/badge/mongo_db-181717?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![express](https://img.shields.io/badge/express-181717?style=for-the-badge&logo=express)](https://expressjs.com/)</br>
[![react](https://img.shields.io/badge/react-181717?style=for-the-badge&logo=react)](https://reactjs.org/)
[![node js](https://img.shields.io/badge/node-181717?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)</br>
[![bootstrap](https://img.shields.io/badge/bootstrap-181717?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)</br>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
