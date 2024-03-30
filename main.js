class MyIndex extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
          <header>
            <nav>
              <ul class="horizontal-menu">
                <li><a href=index.html>Home</a>
                <li><a href=cv.html>Curriculum</a>
                <li><a href=about.html>About Me</a>
                <li><a href=projects.html>Projects</a>
              </ul>
            </nav>
          </header>
          `
    }
}
customElements.define('my-header', MyIndex)

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <style>
          footer {
            text-align: center;
          }
        </style>
        
        <footer>
        © 2024 Carlo Divari
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)

