import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export class Address {
   street: string = '';
   city: string = '';;
   state: string = '';;
   zip: string = '';;
}

export class Profile {
  firstName: string = '';;
  lastName: string = '';;
  address: Address = new Address();
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  domain = new Profile();

  profileForm: FormGroup;


  constructor(private fb: FormBuilder){}

  ngOnInit(){
    const pr = new Profile();
     console.warn(pr);
    const domainSetting: Object = Reflect.getPrototypeOf(pr);
    console.warn(domainSetting);
    this.profileForm = this.fb.group(domainSetting);
    this.domain.firstName = 'xingl';
    this.domain.address.city = 'sh';
    console.log(this.domain);
    console.log('111');
    this.profileForm.patchValue(this.domain);
    
  }
}
