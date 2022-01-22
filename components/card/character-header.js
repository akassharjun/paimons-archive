class CharacterHeader extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = this.render();
    }
  
    render() {
      // css
      const styles = /* css */ `
          #char-card-${this.get("character-name", true)} {
              background: url(${this.get("background-image")
                .split(" ")
                .join("-")});
              background-position: center;  
              background-size: cover;
              background-repeat: no-repeat; 
          }
  
          #character-weapon-type{
            text-shadow: rgba(0, 0, 0, 1) 5px 5px 8px;
          }
  
          #character-name {
              text-shadow: rgba(0, 0, 0, 1) 5px 5px 8px;
              line-height: 1;
          }
  
          @media only screen and (max-width: 450px){  
              br {
                display: none;
              }
          }
        `;
  
      // html template
      const html = /* html */ `
          <style>${styles}</style>
          <div class="flex flex-row justify-between items-end px-5 pt-5 relative h-64 md:h-40 overflow-hidden md:w-64" 
          id="char-card-${this.get("character-name", true)}" >
                  <div class="flex flex-col justify-between h-full">
                      <img class="h-12 w-fit" src="${this.get("vision-image")}" />
                      <div id="character-info" class="pb-5">
                          <p id="character-weapon-type" class="text-white text-thin">${this.get("weapon-type")}</p>
                          <h1 id="character-name" class="text-white">${this.get("character-name")}</h1>
                      </div>
                  </div> 
                  <div class="absolute right-0 top-4 px-1 bg-red-600 py-1 ${this.get("new")}"><p class="text-white text-xs">NEW</p></div>
                  <img src="${this.get("character-image")}" class="absolute right-5 top-0 md:right-0 md:top-5 w-40" style="z-index:0;" />
          </div>
        `;
  
      return html;
    }
  
    get(attr, id) {
      if (attr == "new"){
        console.log(this.getAttribute(attr));
        if (this.getAttribute(attr) == "undefined") {
          return "hidden"
        } else {
          return ""
        }
      }
  
      let name = this.getAttribute(attr)
  
      if (attr == "character-name" && !id) {
        if (name.length < 8) {
          return name;
        }
  
        return name.split(" ").join(" <br>");
      }
  
      return name.split(" ").join("-");
    }
  }
  
  window.customElements.define("char-header", CharacterHeader);
  