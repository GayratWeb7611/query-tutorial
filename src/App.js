import HomePage from './components/Home.page';
import { Route, Routes , BrowserRouter , Link } from 'react-router-dom';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/SuperHeroes.page';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/' >
            Home
          </Link>
        </li>
        <li>
          <Link to='/superheroes' >
            SuperHeroes
          </Link>
        </li>
        <li>
          <Link to='/rq-superheroes' >
            RQSuperHeroesPage
          </Link>
        </li>
      </ul>
    </nav>
        <Routes>
          <Route path ='/' element = {<HomePage/>}  />
          <Route path = '/superheroes' element = {<SuperHeroesPage/>}  />
          <Route path ='/rq-superheroes' element = {<RQSuperHeroesPage/>}  />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
