import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  urlIdEliminar: number;
  showAlert: boolean = false;
  mensajeAlTerminar: string = "";
  mensajeAceptar: string = "";
  urlInput: string;
  currentId = 4;
  urls: any = [
    {
      id: 1,
      url: "http://google.com",
      mensaje: "ok",
      codigo: "200"
    },
    {
      id: 2,
      url: "http://amazon.com.mx",
      mensaje: "ok",
      codigo: "200"
    },
    {
      id: 3,
      url: "http://localhost:3000",
      mensaje: "ok",
      codigo: "200"
    },
  ]
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onActualizar();
  }

  onAgregar(url: string) {
    let newUrl = {
      id: this.currentId,
      url: url,
      mensaje: "",
      codigo: ""
    };
    this.urls.push(newUrl);
    this.currentId += 1;
    this.showAlert = true;
    this.mensajeAlTerminar = "Url Agregada";
    setTimeout(() => { this.showAlert = false }, 1000);

  }
  onEliminar(id: number) {
    $("#verificar").modal('show');
    for (var i = 0; i < this.urls.length; i++) {
      if (this.urls[i].id === id) {
        this.mensajeAceptar = "Esta seguro de eliminar el URL: " + this.urls[i].id + " " + this.urls[i].url;
        this.urlIdEliminar = this.urls[i].id;
      }
    }
  }
  onConfirmarEliminar(id: number) {
    for (var i = 0; i < this.urls.length; i++) {
      if (this.urls[i].id === id) {
        this.urls.splice(i, 1);
        this.showAlert = true;
        this.mensajeAlTerminar = "Url Eliminada";
        setTimeout(() => { this.showAlert = false }, 1000);
      }
    }
  }
  verificarDisponibilidad(id) {
      // Parametros a enviar
      let body = {
        url: this.urls[id].url
      };
      setTimeout(() => { // Espera 100 ms para que se cargue correctamente la informacion
        this.http.post('/api/verificarDisponibilidad', body).subscribe(res => {
          this.urls[id].mensaje = res.statusMessage;
          this.urls[id].codigo = res.statusCode;
          console.table(res);
        }, error => {
          console.log(error);
        });
      }, 100);
    
  }
  onActualizar(){
    for (var i = 0; i < this.urls.length; i++) {
      this.verificarDisponibilidad(i);
    }
    this.showAlert = true;
    this.mensajeAlTerminar = "Urls Actualizadas";
    setTimeout(() => { this.showAlert = false }, 1000);
  }
}
