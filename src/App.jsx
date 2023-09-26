import './App.css'
import Navigation from './components/Navigation/Navigation.jsx';
import Contactheader from './components/ConatctHeader/Contactheader';
import ConatctForm from './components/ContactForm/ContactForm';

function App() {
   return(
    <div>
      <Navigation/>
      <main className="main_container">
          <Contactheader/>
          <ConatctForm/>
      </main>
    </div>
   )
}

export default App
