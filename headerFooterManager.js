class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
          <a href="index.html">
            <img src="PLANE_HEADER.png" alt="plane banner" style="width: 850px;height: 219px;">
          </a>    
        </header>
        `
    }
}

customElements.define('special-header', SpecialHeader)
