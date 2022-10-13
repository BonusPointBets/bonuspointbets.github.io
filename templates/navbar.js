class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="/index.html">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Button 1</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Dropdown maybe</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Link</a></li>
                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                    <div class="dropdown-divider"></div>
                    <li><a class="dropdown-item">Link 3</a></li>
                    <li><a class="dropdown-item">Link 4</a></li>
                    <li><a class="dropdown-item">Link 5</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
        </ul>
      `;
    }
}

customElements.define("navbar-component", Navbar);
