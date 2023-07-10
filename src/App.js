
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {Box} from '@mui/material'
import Dataprovider from './context/Dataprovider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsView from './components/details/DetailsView';
import Cart from './components/cart/Cart';
import OrderSuccess from './components/cart/OrderSuccess';

function App() {
  return (
    <Dataprovider>
        <BrowserRouter>
            <Header/>
            <Box style={{marginTop:"55px"}}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<DetailsView />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/success' element={<OrderSuccess />} />
            </Routes>
            </Box>
        </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
