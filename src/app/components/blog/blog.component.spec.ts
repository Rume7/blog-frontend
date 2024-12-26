// tests/unit/blog.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from '../blog/blog.component';
import { BlogService } from '../../services/blog.service';
import { of } from 'rxjs';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let mockBlogService: jasmine.SpyObj<BlogService>;

  beforeEach(async () => {
    mockBlogService = jasmine.createSpyObj('BlogService', ['getAllPosts']);
    mockBlogService.getAllPosts.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      providers: [
        { provide: BlogService, useValue: mockBlogService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load posts on init', () => {
    const mockPosts = [
      { id: 1, title: 'Test Post', content: 'Test Content', author: 'Test Author', createdDate: new Date() }
    ];
    mockBlogService.getAllPosts.and.returnValue(of(mockPosts));

    component.ngOnInit();

    expect(component.posts).toEqual(mockPosts);
    expect(component.recentPosts.length).toBe(mockPosts.length);
  });
});