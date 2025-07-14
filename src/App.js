
import './App.css';
import './output.css'
import HeaderTop from './Header/HeaderTop/HeaderTop';
import HeaderMiddle from './Header/HeaderMiddle/HeaderMiddle';
import Introduction from './Introduction/Introduction';
import Pagination from './Pagination/Pagination';
import Services from './Services/Services';
import Services2 from './Services/Services2';
import Products from './Products/Products';
import Survery from './Survey/Survery';
import Team from './Team/Team';
import Introducing from './Introducing/Introducing';
import Map from './Map/Map';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderMiddle/>
      <Introduction/>
      <Pagination/>
      <Services/>
      <Services2/>
      <Products/>
      <Survery/>
      <Team/>
      <Introducing/>
      <Map/>
      <Footer/> 

    </div>
  );
}

export default App;
