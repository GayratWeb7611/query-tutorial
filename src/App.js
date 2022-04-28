import HomePage from './components/Home.page';
import { Route, Routes , BrowserRouter , Link } from 'react-router-dom';

import {ReactQueryDevtools} from 'react-query/devtools'
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import RQSuperHeroepage from './components/RQSuperHeroe.page';
import ParallelQueryspage from './components/parallelQuerys.page';
import DinamicParallelpage from './components/DinamicParallel.page';
import DependentQuerys from './components/DependentQuerys';
import Paginated from './components/Paginated';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/' >
            Home
          </Link>
        </li>
        <li>
          <Link to='/dependent-querys' >
            dependent
          </Link>
        </li>
        <li>
          <Link to='/rq-diynamic-parallel' >
            rq-parallel
          </Link>
        </li>
        <li>
          <Link to='/rq-parallel' >
            rq-parallel
          </Link>
        </li>
        <li>
          <Link to='/rq-superheroes' >
            RQSuperHeroes
          </Link>
        </li>
        <li>
          <Link to='/paginated' >
            paginated
          </Link>
        </li>
      </ul>
    </nav>
        <Routes>
          <Route path='paginated' element={<Paginated />}/>
          <Route path='dependent-querys' element={<DependentQuerys email = 'gsattorov0102@mail.ru' />}/>
          <Route path='rq-diynamic-parallel' element={<DinamicParallelpage heroIds={[1,3]}/>}/>
          <Route path='rq-parallel' element={<ParallelQueryspage/>}/>
          <Route path='rq-superheroes/:heroId' element={<RQSuperHeroepage/>}/>
          <Route path ='/' element = {<HomePage/>}  />
          <Route path = 'superheroes' element = {<SuperHeroesPage/>}  />
          <Route path ='rq-superheroes' element = {<RQSuperHeroesPage/>}  />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen = {false} position={'bottom-right'}/>
    </QueryClientProvider>
  );
}

export default App;
