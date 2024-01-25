import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,comedy,trends,actionMovies,documentries,horror,romance} from './Components/urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={trends} title='Trending' isSmall  />
      <RowPost url={documentries} title='Documentries' isSmall  />
      <RowPost url={romance} title='Romance' isSmall  />
      <RowPost url={actionMovies} title='ActionMovies' isSmall  />
      <RowPost url={comedy} title='Comedy Thriller' isSmall  />
      <RowPost url={horror} title='Horror Movies' isSmall  />
    </div>
  );
}

export default App;
