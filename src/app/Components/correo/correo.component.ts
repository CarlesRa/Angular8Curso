import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    
    this.correo = {
      titulo: "Correo Electrónico",
      cuerpo: "Esto es el cuerpo del mail ahora si?",
      emisor:"correoEmisor@openwebinar.inv",
      destinatario: "correoReceptor@openWebinar.inv"
    }

    

  }

  ngOnInit(): void {
  }

}
