import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PostClass } from '../models/post-class.model';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postServiceSpy: jasmine.SpyObj<PostService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    postServiceSpy = jasmine.createSpyObj('PostService',['postMessage']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [HttpClientModule],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing the getter for subjectLine()',()=>{
    let subjectLineFunction = fixture.componentInstance.subjectLine;
    expect(subjectLineFunction).toBeFalsy();
  });

  it('Testing the getter for academics()',()=>{
    let academicsFunction = fixture.componentInstance.academics;
    expect(academicsFunction).toBeFalsy();
  });

  it('Testing the getter for news()',()=>{
    let newsFunction = fixture.componentInstance.news;
    expect(newsFunction).toBeFalsy();
  });

  it('Testing the getter for career()',()=>{
    let careerFunction = fixture.componentInstance.career;
    expect(careerFunction).toBeFalsy();
  });

  it('Testing the getter for postText()',()=>{
    let postTextFunction = fixture.componentInstance.postText;
    expect(postTextFunction).toBeFalsy();
  });

  it('should test if postButtonClicked() method is falsy',()=>{
    let postButtonClickedFunction = fixture.componentInstance.postButtonClicked();
    expect(postButtonClickedFunction).toBeFalsy();
  });

  it('should test prepareSave() method',()=>{
    let prepareSaveFunction = fixture.componentInstance.prepareSave();
    //expect(prepareSaveFunction).toBeFalsy();
  });

  it('should test savePost()', fakeAsync(()=>{
    //CLICK CREATE POST BUTTON TO ACCESS THE FORM
    let postButtonClickedTest = fixture.nativeElement.querySelector('[data-test-id="postButtonClickedTest"]');
    postButtonClickedTest.click();
    fixture.detectChanges();

    //TEST TO SEE SAVEPOST FUNCTION IS TRUTHY
    let savePostFunction = fixture.componentInstance.savePost();
    expect(savePostFunction).toBeFalsy();

    //INPUT INTO FORM TO MAKE THE POST VALID
    spyOn(component, 'savePost').and.callThrough();

    let subjectLineTest = fixture.nativeElement.querySelector('[data-test-id="subjectLineTest"]');
    subjectLineTest.value = "This is to test subject line";
    subjectLineTest.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let savePostTest = fixture.nativeElement.querySelector('[data-test-id="postTextTest"]');
    savePostTest.value = "This is to test post text";
    savePostTest.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let savePostTestButton = fixture.nativeElement.querySelector('[data-test-id="savePostTestButton"]');
    
    //savePostTestButton.click();
    //expect(postServiceSpy.postMessage).toHaveBeenCalled();
    //expect(routerSpy.navigate).toHaveBeenCalledWith(['/homepage']);
    



  }));

});
