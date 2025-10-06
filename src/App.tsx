import './App.css';
import MainCover from './components/MainCover';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AccountInfo from './components/AccountInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <MainCover />
      <EventInfo />
      <Gallery />
      <Location />
      <AccountInfo />
      <Footer />
    </div>
  );
}

export default App;
