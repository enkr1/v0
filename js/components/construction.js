// From 
// https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

class Construction extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // write element functionality in here
        // ...
    }

    connectedCallback() {
        this.innerHTML = `
<section class="construction" id="construction">
    <div class="example-marquee">
        <div class="content">
            <div class="container construction-container inner">
                <div class="section-heading">
                    <h1>Under Construction</h1>
                </div>

                <!-- <p>
                chill lah im still working on it. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
                autem possimus neque consequatur? Omnis voluptates incidunt suscipit
                exercitationem distinctio animi blanditiis velit quam aut. Fugiat ex
                optio iste et?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A corporis natus error numquam impedit adipisci facere, in ipsa? Cum,
                error excepturi. Minima debitis, est quis iusto pariatur
                </p> -->
            </div>
        </div>
    </div>
</section>
`;
    }
}

customElements.define('construction-component', Construction);