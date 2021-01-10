import './App.scss';
import './index.css';
import Nav from './Component/Nav'
import Main from './Component/Main'


function App() {
  return (

    <div className="outerWrap">
      <div className="App">
        <Nav />




      </div>

      <Main />

      <div className="musicPlayer">
        Music Control
      </div>



    </div>
  );
}

export default App;
