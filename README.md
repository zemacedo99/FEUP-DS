# Scrum Book (ds-meic56)

## Docker

### Install
Firstly, you'll need to have Docker and Docker Compose installed on your computer.
- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/#install-compose)

**Note:** Docker Desktop for Windows/Mac includes Compose, so you don't need to install it.

### Build and run our app with Compose
1. From your project directory, start up your application by running the following command:
   ```
   docker-compose up --build
   ```
2. Navigate on your browser to:
   - http://localhost:3000/ to see the application running;
   - http://localhost:3001/ to access to backend.

### Adding a dependency to project
A volume is used to store the node modules so when we add a dependency to package.json, we need to delete these volumes and restart the application.
We can do that with the following command:
   ```
   docker-compose down -v && docker-compose up --build
   ```    
**Note:** if there is a better way to keep the docker modules updated, please update this section.

###Run eslint
It is necessary to have eslint installed locally. For that you have to execute the following command:
```
npm install
```
on both backend and frontend folders.

To run eslint execute the following command:
   ```
   npm run lint
   ```  
on both backend and frontend folders.

## Useful links
- [React](https://reactjs.org/docs/getting-started.html): this page is an overview of the React documentation and related resources.
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/): similar to bootstrap.
- [React-Icons](https://react-icons.github.io/react-icons/): include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
- [Package.json guide](https://nodejs.dev/learn/the-package-json-guide): if you want to understand how package.json works.

## Example
At this moment, the project has a basic example how to use routes, react-bootstrap and how the communication between backend and frontend works without an api.