import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ROUTER_PATHS } from './models/enums';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path={ROUTER_PATHS.HOME} element={<Layout />}>
        <Route path={ROUTER_PATHS.HOME} element={<Home />}></Route>
        <Route path={ROUTER_PATHS.NOTFOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
