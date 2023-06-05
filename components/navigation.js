const template = document.createElement('NavBar');

template.innerHTML = `
<div class ="dive sticky">
    <a onmouseover="colorChange(this)" onmouseout="colorOut(this)" href="index.html" class="button">Home</a>
    <a onmouseover="colorChange(this)" onmouseout="colorOut(this)" href="portfolio.html" class="button">Portfolio</a>
    <a onmouseover="colorChange(this)" onmouseout="colorOut(this)" href="aboutme.html" class="button">About Me</a>
</div>
`;

document.body.appendChild(template.content);