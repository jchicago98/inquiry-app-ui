import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homepageForm = this.formBuilder.group({
    searchBar: new FormControl('', [Validators.required])
  })

  get searchBar(): string { return String(this.homepageForm.get('searchBar')?.value) }


  goToSearchPage(){
    let empt = this.searchBar;
    if(empt != ""){
      this.router.navigate(['/searchpage']);
    }
  }



  constructor(
    private formBuilder: FormBuilder,
    private router : Router
  ) {}



  ngOnInit(): void {
  }

}
