import React, { useState } from 'react';

// Reusable button component: label, onClick and variant are passed in as props.
function ActionButton({ label, onClick, variant }) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrease = () => setCount((previousCount) => previousCount + 1);
  const handleDecrease = () => setCount((previousCount) => previousCount - 1);
  const handleReset = () => setCount(0);

  const isEven = count % 2 === 0;
  const hasName = name.trim().length > 0;

  return (
    <main className="page">
      <section className="app-card">
        <div className="eyebrow">REACT BASICS • ASSIGNMENT</div>
        <h1>My First React App</h1>
        <p className="intro">
          Welcome! This is my first interactive React application. It demonstrates
          components, JSX, props-ready structure, state, events and conditional rendering.
        </p>

        <section className="counter-section" aria-labelledby="counter-heading">
          <h2 id="counter-heading">Interactive Counter</h2>
          <div className="counter-display" aria-live="polite">{count}</div>
          <div className="counter-status">
            {isEven ? 'Even number' : 'Odd number'}
          </div>

          <div className="button-group">
            <ActionButton label="Increase" onClick={handleIncrease} variant="button-primary" />
            <ActionButton label="Decrease" onClick={handleDecrease} variant="button-secondary" />
            <ActionButton label="Reset" onClick={handleReset} variant="button-reset" />
          </div>
        </section>

        <section className="greeting-section" aria-labelledby="greeting-heading">
          <h2 id="greeting-heading">Personalised Greeting</h2>
          <label htmlFor="name-input">What is your name?</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            autoComplete="given-name"
          />

          {hasName && (
            <p className="greeting-message">
              Hello, {name.trim()}! Welcome to My First React App.
            </p>
          )}
          {!hasName && (
            <p className="helper-message">Your personalised greeting will appear here.</p>
          )}
        </section>

        <footer className="footer">
          <span>Built with React</span>
          <span>© {new Date().getFullYear()} My First React App</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
