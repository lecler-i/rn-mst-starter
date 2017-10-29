import AuthStore from '../Auth';

const testAuth = {
  title: 'test'
};

it('testing auth store', async() => {

  expect(await AuthStore.isLoggedIn()).toBe(false);

});
