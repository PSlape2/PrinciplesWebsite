
const template = document.createElement('NavBar');
template.innerHTML = `
    <link rel="stylesheet" href="components/style/globals.css">
    <div class ="dive sticky">
        <a onmouseover="colorChange(this)" onmouseout="colorOut(this)" href="index.html" class="button">Home</a>
        <a onmouseover="colorChange(this)" onmouseout="colorOut(this)" href="pages/portfolio.html" class="button">Portfolio</a>
        <a onmouseover="colorChange(this)" onmouseout="colorOut(this)" href="pages/aboutme.html" class="button">About Me</a>
    </div>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(template.content);
    }
}

customElements.define('NavBar', NavBar);