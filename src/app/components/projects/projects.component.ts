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
        description: 'O projeto "AllCortex" desenvolvido consiste em um site front-end utilizando Angular, projetado para uma empresa de Software House. O objetivo principal do site é fornecer uma plataforma intuitiva e moderna que represente a identidade e os serviços oferecidos pela empresa, destacando-se pela sua interface amigável e responsiva.',
        image: './assets/allcortex.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/Guilherme645/curriculo.'
      },
      {
        name: 'Portfolio',
        description: 'O projeto do portfólio foi desenvolvido com o objetivo de apresentar de maneira intuitiva e profissional os projetos realizados, a lista de clientes e as habilidades de Guilherme Carvalho da Silva como programador Front-end. Utilizando as poderosas bibliotecas PrimeNG e PrimeIcons, o portfólio combina uma interface moderna com uma navegação fácil, permitindo que visitantes explorem com facilidade as competências e realizações profissionais.',
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
        name: 'VitrineWeb',
        description: 'O VitrineWeb é um frontend moderno para e-commerce, oferecendo uma navegação fácil e segura para seus clientes. Totalmente responsivo e customizável, ele cria uma vitrine digital atraente, adaptada à sua marca, proporcionando uma excelente experiência de compra em qualquer dispositivo.',
        image: './assets/shop.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/Guilherme645/ecommerce'
      },
      {
        name: 'formulario interativo',
        description: 'O programa de formulário interativo foi desenvolvido com o objetivo de proporcionar uma experiência totalmente intuitiva e eficiente para os usuários que precisam preencher e enviar informações através de formulários digitais. A aplicação foi cuidadosamente projetada para auxiliar os clientes em cada etapa do preenchimento, garantindo que o processo seja simples, claro e sem frustrações.',
        image: './assets/formulario.png',
        projectLink: 'https://sensational-biscochitos-fa682d.netlify.app/cadastro',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },
      {
        name: 'Consulta de O.S',
        description: 'O programa de consulta de ordens de serviço foi desenvolvido para a UPS Quality com o objetivo de fornecer aos clientes uma maneira eficiente e transparente de acompanhar o estado de seus equipamentos durante o processo de manutenção ou reparo. A aplicação utiliza uma API robusta que permite acessar informações em tempo real sobre as ordens de serviço, proporcionando aos clientes uma visão clara e atualizada do status de seus equipamentos dentro da empresa.',
        image: './assets/ordem de serviço.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },
      {
        name: 'Programa de Manutenção',
        description: 'O programa de manutenção foi desenvolvido com o objetivo de fornecer orientações detalhadas e instruções práticas para técnicos especializados na manutenção de nobreaks. A aplicação visa capacitar os profissionais, oferecendo um guia abrangente que cobre desde as operações básicas até procedimentos avançados de reparo e diagnóstico, garantindo que os técnicos possam executar suas tarefas com precisão e eficiência.',
        image: './assets/upsnn.png',
        projectLink: 'https://link-do-projeto-portfolio.com',
        githubLink: 'https://github.com/usuario/repo-portfolio'
      },
      {
        name: 'PensamentoLivre',
        description: 'O PensamentoLivre é uma aplicação foi desenvolvida com o objetivo de proporcionar aos usuários um espaço seguro e organizado para guardar seus pensamentos e reflexões. Com um design simples e intuitivo, a aplicação permite que os usuários criem, editem, deletem e pesquisem pensamentos específicos, facilitando a organização e o acesso a ideias e reflexões importantes..',
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
