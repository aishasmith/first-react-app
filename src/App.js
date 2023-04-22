import logo from './images/eye.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>
        <code>Hi, my name is Aisha 👋🏾</code>
        </h1>
        <p>
        <code>Aisha 💗's to code!🖥️</code>
        </p>
        <p>
        <code> She is also a talented Portait Artist!👩‍🎨</code>
        </p>
        <p>
        <code>And...loves to bake yummy Cakes!😍🧁</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/aisha-s-7b930ab6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
    </div>
  );
}

export default App;
