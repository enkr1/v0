// From 
// https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

class BasicMeta extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // write element functionality in here
        // ...
    }

    connectedCallback() {
        this.innerHTML = `
<link rel="icon" href="images/logo.gif" type="image/gif" sizes="16x16" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="referrer" content="origin" />
<meta name="author" content="Pang Jing Hui" />
<meta name="description"
    content="Pang Jing Hui, also known as enkr, is a software engineer, web designer, and developer. Pure HTML, CSS, and JS website developed and designed by himself." />
<meta name="keywords"
    content="enkr1, enkr, enkr beatbox, beatbox, singapore beatbox, asia beatboix, vonderie, vonderie beatbox, 555, 555 beatbox" />
`;
    }
}

customElements.define('basic-meta-component', BasicMeta);