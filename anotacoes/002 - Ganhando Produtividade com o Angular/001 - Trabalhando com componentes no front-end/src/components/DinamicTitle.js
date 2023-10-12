class DinamicTitle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Base do componente
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("title");

    // Estilizando o componente
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `;
    // Enviando para o shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("dinamic-title", DinamicTitle);
