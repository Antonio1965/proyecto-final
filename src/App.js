import './sass/app.css'
import { NavBar } from "./components/General/NavBar";
import { Footer } from './components/General/Footer';
// import { Error404 } from './components/General/Error404';
// import { Loader } from './components/Loader/Loader';
// import { Item } from './components/ItemList/Item';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';


export const App =( ) => {
  return (
    <>
    <Router>
    <NavBar title="Drone.Co"/>
    <Switch>
      <Route path='/'>
    <ItemListContainer/>
    </Route>
    <Route paht='/item/:id'>
      <ItemDetailContainer/>
    </Route>
    {/* <Item/> */}
    {/* <Loader/>
    <Error404/> */}
    </Switch>
    <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
    </Router>
    </>
  );
}


