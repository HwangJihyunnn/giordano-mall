function login(id, password) {
  return(dispatch, getstate) => {
    dispatch({type: "LOGIN_SUCCESS", payload: {id,password}})
  }
}

export const authenticateAction = { login };