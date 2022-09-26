import { Messages } from './messages.model';

describe('Messages', () => {
  it('should create an instance', () => {
    expect(new Messages(1, 2, "Morin", "Jorge", "Monroe","Jason","This is a test", new Date(9/26/2022))).toBeTruthy();
  });
});
