class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
          <a href="homepage.html">
            <img src="PLANE_HEADER.png" alt="plane banner" style="width: 850px;height: 219px;">
          </a>    
        </header>
        `
    }
}

class SpecialNav extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav>
          <a href="about.html">
            <img src="NAV_IMAGES/ABOUT.png" alt="cloud music" class="nav-img">
          </a>
          <a href="music.html">
            <img src="NAV_IMAGES/MUSIC.png" alt="cloud music" class="nav-img">
          </a>
            <a href="videos.html">
              <img src="NAV_IMAGES/VIDEOS.png" alt="cloud videos" class="nav-img">
            </a>
          <a href="contact.html">
            <img src="NAV_IMAGES/CONTACT.png" alt="cloud contact" class="nav-img">
          </a>
        </nav>
        `
    }    
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-nav',SpecialNav)
