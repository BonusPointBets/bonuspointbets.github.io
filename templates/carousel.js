class carousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div
        id="carousel-object"
        class="carousel slide"
        data-bs-ride="carousel"
        >
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    src="/images/Carousel1.png"
                    class="d-block w-100"
                    alt="..."
                />
            </div>
            <div class="carousel-item">
                <img
                    src="/images/Carousel2.png"
                    class="d-block w-100"
                    alt="..."
                />
            </div>
            <div class="carousel-item">
                <img
                    src="/images/Carousel3.png"
                    class="d-block w-100"
                    alt="..."
                />
            </div>
        </div>
        </div>
      `;
    }
}

customElements.define("carousel-component", carousel);
