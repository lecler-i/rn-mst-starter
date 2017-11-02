import AuthStore from '../Auth';

const testAuth = {
  username: 'test',
  password: 'test',
  url: 'url',
};

it('testing auth store', async () => {
  expect(await AuthStore.isLoggedIn()).toBe(false);
});
