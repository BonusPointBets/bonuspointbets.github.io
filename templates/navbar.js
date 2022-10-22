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
                <a class="nav-link" href="#">CoinfLip</a>
            </li>

            <a class="navbar-brand"  href="#">
            <img src="/images/Logo.png" alt="..." height="100" >
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
