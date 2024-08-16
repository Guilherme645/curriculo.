import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

 
  clientes: any[] = [];

  ngOnInit(): void {
    this.clientes = [
      { name: 'Cliente 1', logo: './assets/ups.png' },
      { name: 'Cliente 2', logo: './assets/protecline.png' },
      { name: 'Cliente 3', logo: './assets/david.jpeg' },
    ]
  }

}
