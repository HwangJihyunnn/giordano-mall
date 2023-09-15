import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import Navbar from './component/Navbar';

//1. 전체상품 페이지/로그인/상품페이지
//1-1. 네비게이션바
//2. 전체상품페이지에서는 기본 상품이 진열됨.
//3. 로그인 버튼을 클릭하면 로그인 페이지 나옴

//3. 상품을 클릭했을 때 로그인 상태면 -> 상세페이지가 보이고  상태가 아니면 ->로그인 페이지가 보이도록 함.
function App() {
  return (
    <Container>
      <Navbar />
        <Routes>
            <Route path='/' element={ <ProductAll/>} />
            <Route path='/Product' element={ <ProductDetail/>} />
            <Route path='/Login' element={ <LoginPage/>} />
            <Route path='/UserPage' element={ <UserPage/>} />
        </Routes>
    </Container>
  );
}

export default App;