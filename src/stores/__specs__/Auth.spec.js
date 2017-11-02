import fetch from 'fetch-mock';

import AuthStore from '../Auth';

const testAuth = {
  username: 'test',
  password: 'test',
  url: 'url',
};

describe('TTRSS', () => {
  it('isLoggedIn', async () => {
    fetch.mock('*', { loggedIn: false });
    expect(await AuthStore.isLoggedIn()).toBe(false);
  });
  describe('login', () => {
    it('missing params', async () => {
      fetch.mock('*', { lol: 'ok' });
      expect(await AuthStore.login()).toBe(false);
    });
    /* it('bad login/password', async () => { */
    // fetch.mock('*', { lol: 'ok' });
    // expect(await AuthStore.login({ username: 'efew', password: 'fewf' })).toBe(false);
    // });
    /*  */
    // it('correct', async () => {
    // fetch.mock('*', { lol: 'ok' });
    // expect(await AuthStore.login({ username: 'efew', password: 'fewf' })).toBe(true);
    /* }); */
  });
});
