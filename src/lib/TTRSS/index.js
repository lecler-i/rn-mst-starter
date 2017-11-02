import { post } from './../../utils/api';

export const login = async (user, password) => {
  console.log('Trying to login withr ', login, password);
  return post('/', { op: 'login', user, password });
};

export default {
  login,
};
