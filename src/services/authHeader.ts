const authHeader = () => {
  const userStr = window.localStorage.getItem('user');

  let user = null;

  if (userStr) {
    user = JSON.parse(userStr);
  }

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token};
  } else {
    return { Authorization: ''};
  }
}

export default { 
  authHeader
}