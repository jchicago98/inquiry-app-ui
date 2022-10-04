import { PostClass } from './post-class.model';

describe('PostClass', () => {
  it('should create an instance', () => {
    expect(new PostClass(1,undefined,"SubjectLine",true, true, true, "PostText")).toBeTruthy();
  });
});
