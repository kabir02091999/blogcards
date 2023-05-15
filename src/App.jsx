import './App.css';

//imagenes
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

function App() {
  return (
    <div className='contaner' >
      <header className="App-header">
        <h2>blog tarjeta card</h2>
      </header>

      <div className='cards'>

        <div className='card'>

          <img src={img1} ></img>
          <h4>lago</h4>
          <p>que bonito lago jajajajjijiji</p>
          <a href="#">ver mas</a>

        </div>
        <div className='card'>

          <img src={img2} />
          <h4>cafe</h4>
          <p>un cafe en la MAÑANA</p>

        </div>
        <div className='card'>

          <img src={img3}/>
          <h4>tarjeta de video</h4>
          <p>videos juegos</p>

        </div>

      </div>

    </div>
  );
}

export default App;
