class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("url-link") || "#";

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src =
      this.getAttribute("photo") ||
      "https://freesvg.org/img/abstract-user-flat-4.png";
    newsImage.alt = this.getAttribute("alt") || "Foto da notícia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 80%;
      box-shadow: 10px 7px 60px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 7px 60px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 7px 60px -6px rgba(0,0,0,0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
        font-weight: 500;
    }
    .card__left > a {
      margin-top: 15px;
      font-size: 25px;
      color: black;
      text-decoration: none;
     font-weight: bold;
    }
    
    .card__left > a:hover {
      color: slategray;
      text-decoration: underline;
    }
    
    .card__left > p {
      color: gray;
    }
    
    .card__right > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
