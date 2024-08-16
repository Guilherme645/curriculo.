import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.typeAnimation();
  }

  typeAnimation() {
    const textElement = document.getElementById("animated-text");
    const subtextElement = document.getElementById("animated-subtext");

    const text = "Olá, Bem vindo a AllCortex";
    const subtext = "Especializada em front end";

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
}