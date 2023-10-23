import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import PrivateRoute from './page/ProductDetail';
import LoginPage from './page/LoginPage';
// import UserPage from './page/UserPage';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

    /* 
  useEffect()
  함수가 실행될 때, 또 다른 함수가 실행됨 따라서 useEffect(()=>{})라고 써야함
  -인자로 함수를 받음 => 콜백함수
  -Mount --> 화면에 첫 렌더링
  -Update --> 다시 렌터링
  -UnMount --> 화면에서 사라짐

  1) useEffect(()=>{},[]) 
  -> 빈 배열을 넣는 경우: 화면에 처음 렌더링 될 때 실행이 됨. 빈 배열은 한 번만 실행됨 언제? 화면에 첫 렌더링 할 때만
  2) useEffect(()=>{},[value])
  -> value의 값이 바뀔 때마다 실행 

  */
  useEffect(()=>{
    console.log(authenticate);
  },[authenticate])

  return (  
    <Container>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        {/* <Route path='/product/:id' element={<ProductDetail />} /> */}

        {/* privateRoute 설정 */}
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
        <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate}/>} />
        {/* <Route path='/user' element={<UserPage />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
