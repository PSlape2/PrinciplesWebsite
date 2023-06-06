
const footerTemplate = document.createElement('template');

navTemplate.innerHTML = `
    <style>
        #foot {
            height 100px;
            background-color: rgb(111, 111, 245);
        }
        #inner {
            columns:50px 3;
            float: right;
        }
    </style>
    <div id="foot">
        <div id="inner">
            <a href="https://github.com/PSlape2/PrinciplesWebsite2022">
                <img alt="Github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="50">
            </a>
        </div>
    </div>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);