import * as storage from '../storage';

const defaultState = {
};

describe('Utils', () => {
  describe('Storage', () => {
    it('load', async () => {
      expect(await storage.save('key', 'value')).toAnything;
    });
    it('load', async () => {
      expect(await storage.load('key')).toBe('value');
    });
  });
});

