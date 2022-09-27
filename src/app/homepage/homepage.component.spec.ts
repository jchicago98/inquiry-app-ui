import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      imports :[
        ReactiveFormsModule,
        AppRoutingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('testing get searchBar() method, if empty should return nothing, false', () =>{
    let searchBarFunction = fixture.componentInstance.searchBar;
    expect (searchBarFunction).toBeFalsy();
  });

  it ('testing goToSearchPage() method', fakeAsync(() =>{
    //TEST FIRST TO MAKE SURE YOU CAN'T ACCESS SEARCH PAGE YET
    let searchPageFunction = fixture.componentInstance.goToSearchPage();
    expect (searchPageFunction).toBeFalsy();

    //TEST YOU CAN'T STILL ACCESS SEARCHPAGE DESPITE HITTING THE BUTTON
    spyOn(component, 'goToSearchPage').and.callThrough();
    let button = fixture.nativeElement.querySelector('[data-test-id="searchButton"]');
    button.click();
    tick();
    fixture.detectChanges();
    expect (component.goToSearchPage).toHaveBeenCalled();

    //TEST THAT FINALLY INPUTS A SEARCH VALUE AND THE LINK ROUTING WORKS
    let searchBarTextBox = fixture.nativeElement.querySelector('[data-test-id="searchBarTextField"]');
    searchBarTextBox.value = "This is a test";
    searchBarTextBox.dispatchEvent(new Event('input'));
    button.click();

  }))
});
