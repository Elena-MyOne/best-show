# Best Show

![2](https://github.com/Elena-MyOne/best-show/assets/74279859/035038b3-7b0a-4413-ad79-c7f867da9e32)

## Overview

This project aims to explore and demonstrate the integration of Redux Toolkit Query (RTK Query) with Redux for state management, focusing on TypeScript with MSW (Mock Service Worker) for testing. The main objective is to showcase the effective utilization of RTK Query within a Redux application, covering a significant portion of the provided API functionalities and ensuring comprehensive test coverage.

You can preview the live project by visiting [DEMO](https://elena-myone.github.io/best-show).

## API Integration

The project integrates with the TVmaze API, a free and public API that provides access to a vast collection of TV show data. The API offers endpoints for retrieving information about shows, episodes, cast members, and more. Here's an overview of the main endpoints utilized in the project:

1. Base URL: https://api.tvmaze.com/
2. Endpoints:

- `/shows`: Retrieves a list of TV shows.
- `/shows/{id}`: Retrieves detailed information about a specific show, including cast members and seasons.
- `/shows/{id}/episodes`: Retrieves a list of episodes for a specific show.
- `/search/shows`: Performs a search for TV shows based on provided keywords.
- `/search/people`: Performs a search for people (cast members) based on provided keywords.

By leveraging these endpoints, the project fetches and displays relevant data about TV shows, cast members, and episodes, enhancing the user experience with comprehensive information and search functionalities.

For more details about the available endpoints and data structures, refer to the [TVmaze API documentation](https://api.tvmaze.com/) .

## Technologies Used

* React
* Redux Toolkit Query
* TypeScript
* Vitest
* MSW (Mock Service Worker)
* Vite
* ESLint
* Prettier
* Husky

## Features

1. Utilizes <b>Redux Toolkit Query</b> for efficient API data fetching and caching.
2. Implements <b>Redux</b> for state management within the application.
3. Comprehensive test suite covering <b>Redux, RTK Query,</b> and <b>TypeScript</b> with <b>MSW</b>.
4. <b>Home Page</b>:
   Provides a user-friendly interface to display a list of shows.
   Includes a "Show More" button to dynamically load additional shows.
5. <b>Details Page</b>:
   Displays detailed information about a selected show, including cast members and seasons.
6. <b>404 Page</b>:
   Renders a custom page for handling invalid routes.
7. <b>Search Functionality</b>:
   Enables users to search for shows based on specific keywords.
   Allows searching for people on a dedicated People page.
8. Consistent code formatting using <b>Prettier</b> and <b>ESLint</b>.

## Test Coverage

![1](https://github.com/Elena-MyOne/best-show/assets/74279859/14992173-0dd9-4978-a45e-857c2dcb4ab2)

The project boasts an impressive test coverage across various components and functionalities:

<b>Total Test Files: 19</b>
<b>Total Tests: 42</b>

Coverage Percentage:
Statements: 97.3%
Branches: 82.78%
Functions: 87.87%
Lines: 97.3%

## How to Run

1. Installation: Clone the repository and install dependencies.

```
git clone https://github.com/your-username/your-project.git
cd your-project
npm install
```

2. Start Development Server: Run the development server.

```
npm start
```

3. Run Tests: Execute the test suite.

```
npm test
```

4. View Project: Open your browser and navigate to http://localhost:5173/ to view the application.
