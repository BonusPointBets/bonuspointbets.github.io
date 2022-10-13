class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="test">
            <img src="https://assets.vg247.com/current//2014/07/cj.jpg" />
        </div>
      `;
    }
}

customElements.define("navbar-component", Navbar);
