function getProducts(searchQuery) {
  //리덕스 미들웨어는 함수를 리턴
  //return(dispatch, getState)
  //dispatch -> 우리가 만든 dispatch 전달
  //getState -> store에 저장되어있는 state를 받아옴
  return async(dispatch, getState) => {
    let url =  `https://my-json-server.typicode.com/HwangJihyunnn/giordano-mall//products?q=${searchQuery}`
      let response = await fetch(url);
      let data = await response.json();
      console.log(data)
      dispatch({type: "GET_PRODUCT_SUCESS", payload: {data}})
  }
}

export const productAction = {getProducts};