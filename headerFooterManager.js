class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
          <a href="index.html">
            <img src="PLANE_HEADER.png" alt="plane banner" style="width: 90%; height: auto">
          </a>    
        </header>
        `
    }
}

customElements.define('special-header', SpecialHeader)
