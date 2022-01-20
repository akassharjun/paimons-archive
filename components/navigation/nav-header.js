class NavHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    // css
    const styles = /* css */ `

    .nav-header {
      background-color: #1A1A1A;
    }
    `;

    // html template
    const html = /* html */ `
        <style>${styles}</style>
        <div class="flex flex-row md:justify-between py-5 px-10 justify-center nav-header">
            <div>
                <img src="/assets/images/logo.svg" class="h-12 md:h-full"/>
            </div>
            <div class="nav-items md:block hidden">
              <a>Some Link</a>
            </div>
        </div>
    `;

    return html;
  }
}

window.customElements.define("nav-header", NavHeader);
