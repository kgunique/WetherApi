import './App.css';
import Weather from './Waether/Weather'
import Menugallery from './ImageGallery/Menugallery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
      
      <Menugallery/>
      <hr/>
      <b><p>This is an another app for fetching the weather </p></b>
      <Weather />
    </>

  );
}

export default App;
