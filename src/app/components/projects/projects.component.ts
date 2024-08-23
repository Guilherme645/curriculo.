import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any = null;

  ngOnInit(): void {
    this.projects = [
      {
        name: 'All Cortex',
        description: 'O PensamentoLivre é uma biblioteca digital para registrar, editar e organizar seus pensamentos. Com uma interface simples, você pode armazenar, revisar e excluir suas ideias de forma prática e acessível. Ideal para quem precisa de um espaço dedicado para suas reflexões.',
        image: './assets/allcortex.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/Guilherme645/curriculo.'
      },
      {
        name: 'Portfolio',
        description: 'O PensamentoLivre é uma biblioteca digital para registrar, editar e organizar seus pensamentos. Com uma interface simples, você pode armazenar, revisar e excluir suas ideias de forma prática e acessível. Ideal para quem precisa de um espaço dedicado para suas reflexões.',
        image: './assets/gui.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/Guilherme645/curriculo.'
      },
      {
        name: 'GerenciaProdutos',
        description: 'O GerenciaProdutos é uma aplicação simples e eficiente para gerenciar produtos. Com ela, você pode criar, visualizar, atualizar e excluir itens do seu inventário com facilidade. Ideal para empresas de todos os tamanhos, a ferramenta oferece um controle completo e organizado dos seus produtos, mantendo as informações sempre atualizadas e acessíveis.',
        image: './assets/crud.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/Guilherme645/crud'
      },

      {
        name: 'LojaVirtual',
        description: 'O VitrineWeb é um frontend moderno para e-commerce, oferecendo uma navegação fácil e segura para seus clientes. Totalmente responsivo e customizável, ele cria uma vitrine digital atraente, adaptada à sua marca, proporcionando uma excelente experiência de compra em qualquer dispositivo.',
        image: './assets/shop.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/Guilherme645/ecommerce'
      },
      {
        name: 'formulario interativo',
        description: 'O GerenciaProdutos é uma aplicação simples e eficiente para gerenciar produtos. Com ela, você pode criar, visualizar, atualizar e excluir itens do seu inventário com facilidade. Ideal para empresas de todos os tamanhos, a ferramenta oferece um controle completo e organizado dos seus produtos, mantendo as informações sempre atualizadas e acessíveis.',
        image: './assets/formulario.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },
      {
        name: 'Consulta de O.S',
        description: 'O PensamentoLivre é uma biblioteca digital para registrar, editar e organizar seus pensamentos. Com uma interface simples, você pode armazenar, revisar e excluir suas ideias de forma prática e acessível. Ideal para quem precisa de um espaço dedicado para suas reflexões.',
        image: './assets/ordem de serviço.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },
      {
        name: 'Programa de Manutenção',
        description: 'O PensamentoLivre é uma biblioteca digital para registrar, editar e organizar seus pensamentos. Com uma interface simples, você pode armazenar, revisar e excluir suas ideias de forma prática e acessível. Ideal para quem precisa de um espaço dedicado para suas reflexões.',
        image: './assets/upsnn.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },
      {
        name: 'PensamentoLivre',
        description: 'O PensamentoLivre é uma biblioteca digital para registrar, editar e organizar seus pensamentos. Com uma interface simples, você pode armazenar, revisar e excluir suas ideias de forma prática e acessível. Ideal para quem precisa de um espaço dedicado para suas reflexões.',
        image: './assets/memoteca.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },

    ];

    this.checkScroll(); // Verifica a posição inicial dos cards ao carregar a página
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const cards = document.querySelectorAll('.custom-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - 100) {
        card.classList.add('visible');
      }
    });
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  closePopup(): void {
    this.selectedProject = null;
  }
  openProject(url: string) {
    window.open(url, '_blank');
  }

  openGitHub(url: string) {
    window.open(url, '_blank');
  }
}
