import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service'
import { Localidad } from '../../models/Localidad';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  localidades: any;
  mensaje: string;
  localidadID: number;
  edit: boolean;

  localidad: Localidad = {
    pais: '',
    provincia: '',
    ciudad: '',
    direccion: '',
    telefono: '',
  }

  createFormGroup() {
    return new FormGroup({
      pais: new FormControl(''),
      provincia: new FormControl(''),
      ciudad: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl('')
    })
  }

  localidadForm: FormGroup;

  constructor(private usuarioService: UsuarioService) {
    this.localidadForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.localidades = this.usuarioService.getLocalidades();
    console.log("localidades ", this.localidades)
  }

  resetForm() {
    this.localidadForm.reset();
  }


  saveLocalidad() {
    if (this.edit) {

      this.usuarioService.putLocalidades(this.localidad, this.localidadID).subscribe(
        res => {
          console.log(res)
        },
        err => console.error(err)
      );

      this.resetForm()
    } else {
      this.usuarioService.postLocalidades(this.localidad).subscribe(
        res => {
          console.log(res)
        },
        err => console.error(err)
      );
      this.ngOnInit();
    }
    ;
  }

  addMensajeHeader(msj: string, id: number) {
    this.mensaje = msj;
    if (id != -1) {
      this.usuarioService.getLocalidad(id).subscribe(
        res => {
          //console.log(res)
          this.edit = true;
           this.localidadID = res.codigo; 
          this.localidadForm.setValue({
             pais: res.pais,
            provincia: res.provincia,
            ciudad: res.ciudad,
            direccion: res.direccion,
            telefono: res.telefono 
          });
        },
        err => console.error(err)
      );
    } else {
      this.edit = false;
      this.resetForm();
    }
  }

  changeId(id:number){
    this.localidadID = id;
  }

  deleteLocalidad(){
    this.usuarioService.deleteLocalidades(this.localidadID).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
  }

}
