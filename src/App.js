import './assets/css/App.css'
import Nav from './components/Nav'
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className="App">
      <Nav />
      <WeatherPanel />
    </div>
  );
}

export default App;
