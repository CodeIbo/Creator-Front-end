# Creator - Full Stack Application

> The goal of application was create ecosystem which one can create content to pages without deploying changes and be scalable as easy as possible. Stack of application include Backend ( **Mysql 8.033** , **Node.js & express** suported via **sequelizer** ). Admin Panel ( **React 18.2** ). Front-End ( **Angular 14.06** ) . Stack is [dockerized](https://www.docker.com/ "dockerized"), for more accessability in diffrent enviroment. Every section is described in separate repository

1. [Panel Admin - Gtihub](https://github.com/CodeIbo/Creator-admin-panel)
2. [API - Gtihub](https://github.com/CodeIbo/Creator-API)

<br>

# Description Front-End (Angular-app)

This project is a dynamic Angular front-end application that fully generates its content based on instructions from an API. It allows HTML injection and the incorporation of pre-defined components with Inputs to tailor each component to the needs of specific subpages. The entire project is designed to ensure that HTML tags are styled exclusively using predefined CSS classes, enhancing both the aesthetic uniformity and the maintainability of the codebase.

### Features

- **Dynamic Content Generation:** All content is dynamically generated based on API responses.
- **HTML Injection:** A key feature of the application is its ability to handle HTML injections not just with standard HTML tags, but also with custom tags specific to this application, such as `<app-slider>`. When these custom tags are injected, they are rendered and can be fully functional with any properties passed to the component.
- **Class-only**: Styling: All styling is achieved using CSS classes, ensuring a clean and consistent look across all pages.

## Installation

### Step by Step

1. Clone the repository:&nbsp; `git clone [repository-url]`
2. Create file **.env** based on **env.example** and fill all positions (:heavy_exclamation_mark:Important). If you don't have install [Docker Engine](https://docs.docker.com/get-docker/)
3. Create containers based on docker-compose.yml:&nbsp; `docker compose up`
4. Attach shell to container **blogfrontend**:&nbsp; `docker exec -it `
5. Install dependencies
6. Start panel:&nbsp; `npm start`

## TODO

- [ ] **Enhanced Handling of Injected Links**: Implement a mechanism to ensure that links added through HTML injection are fully supported within the Angular ecosystem. This will enhance navigation consistency and integration with Angular's routing capabilities.

- [ ] **Predefined Color and Style Themes**: Develop several predefined color schemes and page styles that can be easily swapped in a single SCSS file. This feature will allow for quick visual customization and consistency across the application.

- [ ] **Expansion of Injectable Components**: Increase the variety of components that can be used within injected HTML. This expansion will provide more flexibility in customizing content dynamically and enhance the application’s interactivity.

- [ ] **Writing Tests**: Develop and write tests to ensure all components function correctly and meet expected behaviors. This will improve reliability and stability across the application.

- [ ] **Application Caching**: Implement caching strategies to reduce the number of API requests. This will improve the application's performance and user experience by decreasing load times and preserving bandwidth.
