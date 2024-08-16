import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barraDePesquisa.component.html',
  styleUrls: ['./barraDePesquisa.component.css']
})
export class BarraDePesquisaComponent {
  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          text: new FormControl<string | null>(null)
      });
  }
}
