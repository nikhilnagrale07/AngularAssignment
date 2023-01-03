import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import {FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from '../users';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  dataSource = new MatTableDataSource<User>();
  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(private _http:HttpClient,private router:Router,private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }
   ngOnInit(){ }
  onSubmit(){
    
    this.userService.getUsers().subscribe((data: User[])=>{
      console.log(data);
      //this.products = data;
    })

    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('user',this.loginForm.value)
    this.router.navigate(['/register']);

  }

}
