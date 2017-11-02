import { post } from './../../utils/api';

export const handleResponse = (resp) => {
  if (resp.status) {
    const error = resp.content && resp.content.error;
    return Promise.reject(error || 'UNKNOWN');
  }
  return resp.content;
};

export const login = async (user, password) => post('/', { op: 'login', user, password }).then(handleResponse);

export const isLoggedIn = async sid => post('/', { op: 'isLoggedIn', sid }).then(handleResponse).then((({ status }) => status));

export default {
  login,
  isLoggedIn,
};
