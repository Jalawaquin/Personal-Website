class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
          <a href="index.html">
            <img src="PLANE_HEADER.png" alt="plane banner" class="plane-header">
          </a>    
        </header>
        `
    }
}

customElements.define('special-header', SpecialHeader)
