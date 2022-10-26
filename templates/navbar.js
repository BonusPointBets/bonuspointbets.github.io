class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <ul class="nav nav-pills justify-content-center"> 


            <li class="nav-item ">
                <a class="nav-link" href="#">Roulette</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="coin-flip.html">CoinFlip</a>
            </li>

            <a class="navbar-brand"  href="index.html">
                <img class="navbar-logo" src="/images/logo.png" alt="..." height="70" >
            </a>

            <li class="nav-item">
                <a class="nav-link" href="#">Slots</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
            </li>
        </ul>
      `;
    }
}

customElements.define("navbar-component", Navbar);
