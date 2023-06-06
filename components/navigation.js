
const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
    <link rel="stylesheet" href="components/style/globals.css">
    <div class ="dive sticky">
        <a href="index.html" class="button">Home</a>
        <a href="pages/portfolio.html" class="button">Portfolio</a>
        <a href="pages/aboutme.html" class="button">About Me</a>
    </div>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(navTemplate.content);
    }
}

customElements.define('NavBar', NavBar);