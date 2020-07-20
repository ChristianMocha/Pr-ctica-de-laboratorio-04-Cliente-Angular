import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario: Usuario = {
    cedula: '',
    nombre: '',
    apellido: '',
    correo: '',
    password: ''
  };

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  registrar(){
    console.log(JSON.stringify(this.usuario))
    
    this.usuarioService.registro(this.usuario).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
    
  }

}
