import fetch from 'fetch-mock';

import stores from '../../../stores';
import TTRSS, { handleResponse } from '../';

stores.AppStore.setApiUrl('http://lol.com');


const testAuth = {
  username: 'test',
  password: 'test',
  url: 'url',
};

const SUCCESS_RESP = content => ({ body: { status: 0, content } });
const BAD_RESP = content => ({ body: { status: 1, content } });

const SUCCESS_LOGIN_RESP = SUCCESS_RESP({ session_id: 'abcd' });
const BAD_LOGIN_RESP = BAD_RESP({ error: 'LOGIN_ERROR' });
const DISABLED_LOGIN_RESP = BAD_RESP({ error: 'API_DISABLED' });


describe('TTRSS api Wrapper', () => {
  it('handleResponse', () => {
    expect(handleResponse(SUCCESS_LOGIN_RESP.body)).toEqual(SUCCESS_LOGIN_RESP.body.content);
    expect(handleResponse(BAD_LOGIN_RESP.body)).toEqual(Promise.reject(BAD_LOGIN_RESP.body.content.error));
    expect(handleResponse(BAD_RESP({ content: {} }).body)).toEqual(Promise.reject('UNKNOWN'));
  });

  describe('login', () => {
    it('success', async () => {
      fetch.once('*', SUCCESS_LOGIN_RESP);
      await expect(TTRSS.login('username', 'password')).resolves.toEqual(SUCCESS_LOGIN_RESP.body.content);
    });
    it('disabled', async () => {
      fetch.once('*', DISABLED_LOGIN_RESP);
      await expect(TTRSS.login('username', 'password')).rejects.toEqual(DISABLED_LOGIN_RESP.body.content.error);
    });
    it('bad', async () => {
      fetch.once('*', BAD_LOGIN_RESP);
      await expect(TTRSS.login('username', 'password')).rejects.toEqual(BAD_LOGIN_RESP.body.content.error);
    });
  });
});
