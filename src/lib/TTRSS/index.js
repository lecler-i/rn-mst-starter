import { post } from './../../utils/api';

const handleResponse = (resp) => {
  if (resp.status) {
    return Promise.reject('STATUS = 0');
  }
  return resp.content;
};

export const login = async (user, password) => {
  console.log('Trying to login withr ', login, password);
  return post('/', { op: 'login', user, password }).then(handleResponse);
};

export const isLoggedIn = async sid => post('/', { op: 'isLoggedIn', sid }).then(console.log);

export default {
  login,
  isLoggedIn,
};
