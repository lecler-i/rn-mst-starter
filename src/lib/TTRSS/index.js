import {post} from './../../utils/api';

const url = 'http://ttrss.thomas.sh/api/';

export const login = async(user, password) => {
  console.log('Trying to login withr ', login, password);
  return post(`${url}`, {op: 'login', user, password});
};

export default {
  login
};
