import { sayHelloWorld } from '../src/say-hello-world';

describe('Say Hello World', function () {
  it('should return hello world', function () {
    expect(sayHelloWorld('Hello World')).toBe('Hello World');
  });
});
