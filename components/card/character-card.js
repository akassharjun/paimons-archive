class CharacterCard extends HTMLElement {
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
            border-radius:16px; 
            filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
        }

        #character-weapon-type{
            text-shadow: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
        }

        #character-name {
            text-shadow: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
            line-height: 1;
        }

        @media only screen and (max-width: 400px){

            #character-weapon-type {
                font-size: 0.75rem;
                line-height: 2;
            }

            #character-name {
                font-size: 1.4rem;
            }

            br {
              display: none;
            }
        }
      `;

    // html template
    const html = /* html */ `
        <style>${styles}</style>
        <div class="bg-blue-400 flex flex-row justify-between items-end px-5 pt-5 relative h-32 overflow-hidden md:aspect-square md:w-full md:h-full" 
        id="char-card-${this.get("character-name", true)}">
                <div class="flex flex-col justify-between h-full">
                    <img class="h-7 w-7 md:h-12 md:w-12" src="${this.get("vision-image")}" />
                    <div id="character-info" class="pb-5">
                        <p id="character-weapon-type" class="text-white text-thin">${this.get("weapon-type")}</p>
                        <h1 id="character-name" class="text-white">${this.get("character-name")}</h1>
                    </div>
                </div> 
                <img src="${this.get("character-image")}" class="absolute right-5 top-0 md:right-0 lg:right-5 md:top-5 md:w-40 w-20" style="z-index:-1;" />
        </div>
      `;

    return html;
  }

  get(attr, id) {
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

window.customElements.define("char-card", CharacterCard);
