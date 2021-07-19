import './sass/app.css'
import { NavBar } from "./components/General/NavBar";
import { Footer } from './components/General/Footer';
import { Error404 } from './components/General/Error404';
import { Loader } from './components/Loader/Loader';
import { Item } from './components/ItemList/Item';


export const App =( ) => {
  return (
    <>
    <NavBar title="Drone.Co"/>
    <Item/>
    {/* <Loader/>
    <Error404/> */}
    <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
    </>
  );
}


