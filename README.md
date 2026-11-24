# My First React App

A simple interactive React application built for the **React Basics – Your First Interactive App** assignment.

## Features

- Functional `App` component using JSX.
- Reusable `ActionButton` component receiving `label`, `onClick` and `variant` through props.
- React `useState` for counter and name state.
- Increase, Decrease and Reset counter buttons.
- Conditional display showing whether the counter is even or odd.
- Controlled name input using `onChange`.
- Personalised greeting displayed only when a name is entered.
- Greeting uses a lighter red background when visible.
- Footer displays the current year.
- Responsive layout for desktop and mobile screens.

## Technologies

- React
- JavaScript (ES6+)
- CSS
- Vite

## How to run the application

1. Install Node.js (LTS version) from https://nodejs.org/.
2. Download or clone this repository.
3. Open the project folder in Visual Studio Code.
4. Open the terminal in VS Code.
5. Install the dependencies:

   ```bash
   npm install
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open the local URL displayed in the terminal (usually `http://localhost:5173`).

## Create a production build

Run:

```bash
npm run build
```

Vite will create the production-ready files in the `dist` folder.

## GitHub submission

Create a GitHub repository named `my-first-react-app`, then run these commands in the project folder:

```bash
git init
git add .
git commit -m "Complete My First React App assignment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-first-react-app.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Assignment notes

This project uses functional components, JSX, `useState`, event handlers (`onClick` and `onChange`), and conditional rendering as required. The optional reset button, greeting colour treatment and current-year footer are also included.
