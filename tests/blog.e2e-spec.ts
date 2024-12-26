import { test, expect } from '@playwright/test';

test.describe('Blog Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Navigate to your app's root URL
  });

  test('should display blog title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Blog');
  });

  test('should navigate to blog posts', async ({ page }) => {
    await page.click('[data-testid="blog-posts-link"]');
    await expect(page).toHaveURL('/posts');
  });

  test('should display blog post list', async ({ page }) => {
    await page.goto('/posts');
    await expect(page.locator('.blog-post-list')).toBeVisible();
  });

  test('should display post details when clicking on a post', async ({ page }) => {
    await page.goto('/posts');
    await page.click('.blog-post-card:first-child');
    await expect(page.locator('.post-detail')).toBeVisible();
  });

  test('should allow authenticated users to create new posts', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');

    // Create new post
    await page.goto('/posts/new');
    await page.fill('[data-testid="post-title"]', 'Test Post');
    await page.fill('[data-testid="post-content"]', 'Test Content');
    await page.click('[data-testid="submit-post"]');

    // Verify post creation
    await expect(page).toHaveURL('/posts');
    await expect(page.locator('.blog-post-card')).toContainText('Test Post');
  });
});