class Leaves extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // write element functionality in here
        // ...
    }

    connectedCallback() {
        this.innerHTML = `
<div class="animation-leaves">
    <ul class="leaves">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
</div>
`;
    }
}

customElements.define('leaves-component', Leaves);