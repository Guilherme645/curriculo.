import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conhecimentos',
  templateUrl: './conhecimentos.component.html',
  styleUrls: ['./conhecimentos.component.css']
})
export class ConhecimentosComponent  {

  technologies = [
    { name: 'Angular', icon: 'pi pi-code' },
    { name: 'React', icon: 'pi pi-cog' },
    { name: 'Node.js', icon: 'pi pi-server' },
    { name: 'Python', icon: 'pi pi-python' }, // esse ícone não existe em PrimeIcons, isso causará um erro
    { name: 'AWS', icon: 'pi pi-amazon' },
    { name: 'Azure', icon: 'pi pi-microsoft' },
    { name: 'Ruby on Rails', icon: 'pi pi-ruby' }, // esse ícone não existe em PrimeIcons
    { name: 'VueJS', icon: 'pi pi-desktop' }, // você pode substituir por algo genérico
    { name: 'Elixir', icon: 'pi pi-beaker' }, // esse ícone não existe em PrimeIcons
    { name: 'Django', icon: 'pi pi-cog' }, // esse ícone não existe em PrimeIcons
    { name: 'Figma', icon: 'pi pi-palette' },
    { name: 'Flutter', icon: 'pi pi-mobile' }
  ];

}
