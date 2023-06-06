
const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
    <link rel="stylesheet" href="/components/style/globals.css">
    <div class ="dive sticky">
        <a href="/index.html" class="button">Home</a>
        <a href="/portfolio.html" class="button">Portfolio</a>
        <a href="/aboutme.html" class="button">About Me</a>
    </div>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="/components/style/globals.css">
            <div class ="dive sticky">
                <a href="/index.html" class="button">Home</a>
                <a href="/portfolio.html" class="button">Portfolio</a>
                <a href="/aboutme.html" class="button">About Me</a>
            </div>
        `;
    }
}

customElements.define('NavBar', NavBar);