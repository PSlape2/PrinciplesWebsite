
const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
    <style>
        .button {
            background-color: #ffffff;
            color: rgb(0, 0, 0);
            padding: 20px 25px;
            text-align: center;
            display: inline-block;
            font-size: 12px;
            margin: 4px 2px;
            cursor: pointer;
        }
        .button:hover {
            background-color: gray;
        }
        .dive {
            color: black;
            background-color: rgb(111, 111, 245);
            text-align: center;
            padding: 20px, 20px;
        }
        .sticky {
            position: sticky;
            top: 0;
        }
    </style>
    <div class ="dive sticky">
        <a href="/PrinciplesWebsite2022/index.html" class="button">Home</a>
        <a href="/PrinciplesWebsite2022/portfolio.html" class="button">Portfolio</a>
        <a href="/PrinciplesWebsite2022/aboutme.html" class="button">About Me</a>
    </div>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(navTemplate.content);
    }
}

customElements.define('navbar-component', NavBar);