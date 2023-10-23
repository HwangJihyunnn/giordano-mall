let initialState = {
  productList: []
}

function productReduce(state=initialState, action) {
  let { type, payload} = action

  switch(type) {
      case "GET_PRODUCT_SUCESS":
          return {
              ...state,
              productList: payload.data
          }     
      default:
          return {...state}      
      }
  }

export default productReduce;