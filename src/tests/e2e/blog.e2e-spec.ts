// tests/e2e/blog.e2e-spec.ts
import { browser, by, element } from 'protractor';

describe('Blog App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display blog posts', () => {
    const posts = element.all(by.css('.post'));
    expect(posts.count()).toBeGreaterThan(0);
  });

  it('should display recent posts in sidebar', () => {
    const recentPosts = element.all(by.css('.recent-posts li'));
    expect(recentPosts.count()).toBeGreaterThan(0);
  });

  it('should navigate to post detail when clicking recent post', () => {
    const firstRecentPost = element.all(by.css('.recent-posts li a')).first();
    firstRecentPost.click();
    
    expect(browser.getCurrentUrl()).toContain('/post/');
  });
});