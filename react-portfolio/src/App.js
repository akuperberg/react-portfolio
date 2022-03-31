import './styles/App.scss'; 
import photo from './media/photo.png'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <div className="navigation">
          <div className="container-name">
            <img src={photo} alt="img in header"/>
            <div>
              <p>Anastasia Kuperberg</p>
              <p>Front end developer</p>
            </div>  
          </div>
          <div className="container-nav">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>  
          </div>
        </div>
        <Home />
    </div>
  );
}

export default App;
