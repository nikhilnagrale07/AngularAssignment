import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class RegisterComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    emailCtrl:['', Validators.required],
    fName:['', Validators.required],
    mName:['', Validators.required],
    gender:['', Validators.required],
    dateOfBirth:['', Validators.required],
    mobile:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  });
  bankDetails = this._formBuilder.group({});
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
 
}
