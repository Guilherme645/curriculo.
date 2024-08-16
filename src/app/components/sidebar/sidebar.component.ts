import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sidebarVisible: boolean = false;

  inicio() {
    console.log('Início clicado');
    // Implementação adicional para redirecionar ou executar ações na página inicial
  }

  clientes() {
    console.log('Clientes clicado');
    // Implementação adicional para redirecionar ou executar ações na seção de clientes
  }

  out() {
    console.log('Sair clicado');
    // Implementação adicional para sair ou redirecionar para logout
  }
}
