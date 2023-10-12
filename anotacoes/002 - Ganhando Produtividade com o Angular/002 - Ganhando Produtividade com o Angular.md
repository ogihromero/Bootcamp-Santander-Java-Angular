# 002 - Ganhando Produtividade com o Angular

## Trabalhando com Web Components no Front-end
- O D.O.M é uma especificação que permite que você crie componentes reutilizáveis em aplicações web.
- O Shadow DOM é uma especificação que permite que você crie componentes encapsulados em aplicações web, ou seja, você pode criar componentes que não podem ser acessados fora do seu escopo.
- O Custom Elements é uma especificação que permite que você crie componentes personalizados em aplicações web, ou seja, você pode criar componentes com a sua própria tag HTML.
- [Can I use](https://caniuse.com/) é um site que mostra o suporte dos navegadores para as tecnologias web.
- Para criar elementos customizados, você precisa utilizar a classe `HTMLElement` como base para a sua classe.
- É necessário um hífen no nome da tag do seu elemento customizado.
- Ao importar o componente, é recomendado utilizar o atributo `defer` para que o script seja executado após o carregamento da página.

## TypeScript para Angular
- O TypeScript é um superset do JavaScript que adiciona tipagem estática e alguns recursos extras ao JavaScript.
- O TypeScript é compilado para JavaScript.
- O TypeScript permite a criação de interfaces, enums, decorators, entre outros recursos.
- Geralmente interfaces são usadas em classes enquanto types são usados em variáveis.
- As interfaces permitem alterar o tipo de uma variável em tempo de execução.

## Introdução ao Angular
- O Angular é um framework para a criação de aplicações web e mobile utilizando o TypeScript.
- O Angular é baseado em componentes.
- Tem o foco em SPA (Single Page Application).
- O Angular utiliza o conceito de injeção de dependências.
- WebApps possuem 4 camadas: Componentes, gerenciamento de estados, roteamento e renderização.
- Os componentes são a camada de apresentação da aplicação.
- Um componente é um elemento visual, customizável, reutilizável e independente.
- O gerenciamento de estados garante que as informações sejam compartilhadas entre os componentes e que as informações sejam atualizadas em tempo real entre eles.
- O roteamento é responsável por definir as rotas da aplicação, ou seja, qual componente será exibido em cada rota.
- A renderização é responsável por entender o código HTML e transformá-lo em elementos visuais.
- A renderização pode ser 100% client-side, 100% server-side ou uma mistura dos dois.
- Para passar valores entre componentes no Angular, é necessário utilizar o conceito de data binding.
- O data binding é realizado por:
  - Interpolação: `{{ variavel }}` , usado para exibir valores.
  - Property binding: `<img [src]="url">`, usado para definir valores.
  - Event binding: `<button (click)="funcao()">`, usado para executar funções.
  - Two-way data binding: `<input [(ngModel)]="nome">`, usado para definir e exibir valores.
- No ciclo de vida do componente há 8 métodos que podem ser executados:
  - ngOnChanges: Executado quando o valor de um input property é alterado.
  - ngOnInit: Executado quando o componente é inicializado.
  - ngDoCheck: Executado durante a verificação de mudanças.
  - ngAfterContentInit: Executado após inserir conteúdo externo na view.
  - ngAfterContentChecked: Executado após verificar o conteúdo inserido.
  - ngAfterViewInit: Executado após a inicialização do componente e da view.
  - ngAfterViewChecked: Executado após verificar a inicialização do componente e da view.
  - ngOnDestroy: Executado antes da diretiva/componente ser destruído.
- O Construtor é executado antes de qualquer método do ciclo de vida do componente, como o ngOnInit ou o ngOnChanges.
- A ordem de DoCheck de mudanças é: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked e ngOnDestroy.
- É checado primeiro o conteúdo e depois a view, com o componente pai sendo executado antes do componente filho.
- Diretivas são instruções que podem ser adicionadas a um elemento HTML.
- Há diretivas de atributo(`[ngClass]`, `[ngStyle]`, `[ngModel]`) e  estruturais(`*ngIf`, `*ngFor`, `*ngSwitch`).
- `ngIf`: Adiciona ou remove um elemento da DOM baseado em uma expressão.
- O `ngIf` pode ser usado com Data Binding, Property Binding e Event Binding.
- `ngFor`: Repete um elemento baseado em uma lista.
- O `ngTemplate` é uma diretiva estrutural que permite a criação de templates.
- O `ngModel` requer a importação do `FormsModule` no módulo da aplicação.
- O `ngContent` é uma diretiva estrutural que permite a criação de conteúdo dinâmico, ou seja, o conteúdo é definido no componente pai.
- `NgModule` é um decorator que define um módulo, ou seja, um agrupamento de componentes, diretivas, pipes e serviços.
- É comum ser criado um módulo "shared" para componentes, diretivas e pipes que serão compartilhados entre os módulos da aplicação e um módulo "pages/x" para componentes, diretivas e pipes que serão utilizados apenas  em cada pagina "x".