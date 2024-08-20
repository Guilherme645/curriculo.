import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.typeAnimation();
  }

  typeAnimation() {
    const textElement = document.getElementById("animated-text");
    const subtextElement = document.getElementById("animated-subtext");

    const text = "Olá, meu nome é Guilherme Carvalho!!";
    const subtext = "Seja bem vindo ao meu portfólio";

    let index = 0;
    let subindex = 0;

    function type() {
      if (index < text.length) {
        textElement!.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      } else if (subindex < subtext.length) {
        subtextElement!.style.opacity = "1";
        subtextElement!.textContent += subtext.charAt(subindex);
        subindex++;
        setTimeout(type, 100);
      }
    }

    type();
  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = './assets/2020-2022  Ensino Médio completo_20240818_164537_0000.pdf';
    link.download = 'Curriculo_Guilherme_Carvalho.pdf'; // Nome que aparecerá para o usuário no momento do download
    link.click();
  }
  
}
