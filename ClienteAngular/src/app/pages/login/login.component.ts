import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      correo: new FormControl(''),
      password: new FormControl('')
    })
  }

  loginForm: FormGroup;

  constructor(private usuarioService:UsuarioService) {
    this.loginForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  resetForm(){
    this.loginForm.reset();
  }

  login(){
    console.log("login...", this.loginForm.value.correo);
    this.usuarioService.login(this.loginForm.value.correo, this.loginForm.value.password).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
    this.resetForm();
  }

}
