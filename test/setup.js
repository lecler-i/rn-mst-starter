import MockAsyncStorage from 'mock-async-storage';

// https://github.com/facebook/react-native/issues/11585
jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn(),
}));

const mockImpl = new MockAsyncStorage();
jest.mock('AsyncStorage', () => mockImpl);
