import AppStore from '../App';

const defaultState = {
};

describe('App Store', () => {
  describe('Action', () => {
    it('setApiUrl', () => {
      AppStore.setApiUrl('test');
      expect(AppStore.apiUrl).toBe('test');
    });
    it('loaded', () => {
      expect(AppStore.loaded()).toBe(true);
      expect(AppStore.isLoading).toBe(false);
    });
  });
});

