export const getUser = () => {
  const loggedInUser = window.localStorage.getItem('userToken');

  if (!loggedInUser) {
    throw new Error('No token found');
  }

  return JSON.parse(loggedInUser);
}