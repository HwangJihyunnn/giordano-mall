import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Navbar = () => {
  /* 네비게이션 메뉴바 영역을 배열로 처리 -> 메뉴의 확장성 */
  const authenticate = useSelector(state=> state.auth.authenticate)
  const menuList = [
    "전체",
    "아우터",
    "드레스",
    "상의",
    "하의",
    "악세서리",
    "특가세일"
  ]

  // 사이드바 메뉴
  let [width, setWidth] = useState()

  const navigate = useNavigate();
/*   const goToLogin = () => {
    navigate('/login')
  } */

  //리엑트에서는 인풋요소의 읽어오는 값이 이벤트에 있음
  const search = (e) => {
    //console.log('key press')
    if (e.key==="Enter") {
      //console.log("enter",e.key)
      //입력한 검색어를 읽어와야 함
      let keyword = e.target.value;
      //console.log(keyword)

      //url을 변경
      navigate(`/?q=${keyword}`)
    }

  }
  return (
    <>
      {/* 메뉴 버튼을 클릭하면 나타나는 사이드메뉴 영역 */}
      <div className="side-menu" style={{width:width}}>
        <button className="close-button" onClick={()=>setWidth(0)}>
          <img src={require('../img/close.png')} alt="메뉴닫기" />
        </button>
        <ul className='side-menu-list'>
          {
            menuList.map((menu, idx)=> (
              <li key={idx}><a href='#'>{menu}</a></li>
            ))
          }
        </ul>
      </div>

           {/* 햄버거메뉴 */}
           <div className="nav-header">
        <div className="burger-menu hide">
          <img src={require('../img/menu.png')} alt="메뉴열기" onClick={()=>{setWidth(280)}}/>
        </div>
          {/* 로그인 버튼을 클릭하면 로그아웃이 되고 로그아웃을 클릭하면 로그인으로 변경 */}
          {
            authenticate == true?
              <div>
                <FontAwesomeIcon icon={faUser} />
                <span style={{cursor: 'pointer'}}>로그아웃</span>
              </div>
              :
              <div onClick={()=> navigate('./login')}>
                <FontAwesomeIcon icon={faUser} />
                <span style={{cursor: 'pointer'}}>로그인</span>
              </div>

          }
      </div>

      {/* <div className="login-button" onClick={}>
        <FontAwesomeIcon icon={faUser} />
        <span className="login-text">로그인</span>
      </div> */}
      <div className="logo">
        <Link to ='/'>
          <img src={require('../img/logo.png')} alt="로고" />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {
            menuList.map(
              (menu, idx) => <li key={idx}><a href="#">{menu}</a></li>
            )
          }
        </ul>
        <div className="search-area">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="상품검색" onKeyDown={(e) => search(e)}/>
        </div>
      </div>      
    </>
  )
}

export default Navbar