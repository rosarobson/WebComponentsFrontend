class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    //contruindo a estrutura HTML
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //CARD LEFT
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
        const autor = document.createElement("span");
        autor.textContent = "By "+(this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("news");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        //CARD RIGHT
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("caminho") || "imgs/default.jpg");
        newsImage.alt = "Imagem Darth Vader";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    //estilizando o conteudo
    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 10px 7px 39px 2px rgba(0, 0, 0, 0.49);
            -moz-box-shadow: 10px 7px 39px 2px rgba(0, 0, 0, 0.49);
            box-shadow: 10px 7px 39px 2px rgba(0, 0, 0, 0.49);
            justify-content: space-between;
        }
        
        
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left>span {
            font-weight: 400;
        }
        
        .card_left> a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card_left> a:hover {
            color: gray;
        }
        
        .card_left>p {
            color: gray;
        }

        .card_right>img {
            width: 100px;
            margin: 5px;
        }
        
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);
