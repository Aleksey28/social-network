import './App.css';

function Header() {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#s">News Feed</a>
    </div>
  )
}

function Technologies() {
  return (
    <ul>
      <li>html</li>
      <li>css</li>
      <li>js</li>
      <li>react</li>
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Technologies/>
    </div>
  );
}

export default App;
