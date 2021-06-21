import { AsyncSafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new AsyncSafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
