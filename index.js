let characters = [
  {
    id: "KGSE",
    name: "Keqing",
    weaponType: "Sword",
    vision: "Electro",
  },
  {
    id: "KKSA",
    name: "Kaedehara Kazuha",
    weaponType: "Sword",
    vision: "Anemo",
  },
  {
    id: "HTPP",
    name: "Hu Tao",
    weaponType: "Polearm",
    vision: "Pyro",
  },
  {
    id: "XGPP",
    name: "Xiangling",
    weaponType: "Polearm",
    vision: "Pyro",
  },
  {
    id: "ZIPG",
    name: "Zhongli",
    weaponType: "Polearm",
    vision: "Geo",
    new: 4,
  },
  {
    id: "KSBE",
    name: "Kujou Sara",
    weaponType: "Bow",
    vision: "Electro",
  },
  {
    id: "TABH",
    name: "Tartaglia",
    weaponType: "Bow",
    vision: "Hydro",
  },
  {
    id: "XOPA",
    name: "Xiao",
    weaponType: "Polearm",
    vision: "Anemo",
    new: 2,
  },
  {
    id: "DCCP",
    name: "Diluc",
    weaponType: "Claymore",
    vision: "Pyro",
  },
  {
    id: "AICG",
    name: "Arataki Itto",
    weaponType: "Claymore",
    vision: "Geo",
  },
  {
    id: "RSPE",
    name: "Raiden Shogun",
    weaponType: "Polearm",
    vision: "Electro",
  },
  {
    id: "NGCG",
    name: "Ningguang",
    weaponType: "Catalyst",
    vision: "Geo",
  },
  {
    id: "SKCH",
    name: "Sangonomiya Kokomi",
    weaponType: "Catalyst",
    vision: "Hydro",
  },
  {
    id: "AOSG",
    name: "Albedo",
    weaponType: "Sword",
    vision: "Geo",
  },
  {
    id: "KASC",
    name: "Kamisato Ayaka",
    weaponType: "Sword",
    vision: "Cryo",
  },
  {
    id: "DABC",
    name: "Diona",
    weaponType: "Bow",
    vision: "Cryo",
  },
  {
    id: "BTPS",
    name: "Bennett",
    weaponType: "Sword",
    vision: "Pyro",
  },
  {
    id: "SEPC",
    name: "Shenhe",
    weaponType: "Polearm",
    vision: "Cryo",
    new: 1,
  },
  {
    id: "GUBC",
    name: "Ganyu",
    weaponType: "Bow",
    vision: "Cryo",
    new: 3,
  },
];

const characterDb = new PouchDB("characters", { auto_compaction: true });

$(document).on("ready", async () => {
  // characters.sort(function (a, b) {
  //   if (a.id < b.id ) {
  //     return -1;
  //   }
  //   if (a.id > b.id) {
  //     return 1;
  //   }
  //   return 0;
  // });

  characters.sort(() => Math.random() - 0.5)

  characters.sort(function (a, b) {
    if (a.new == undefined) {
        return 1;
    } else {
      if (a.new > b.new) {
          return 1;
      }  else {
        return -1;
      }
    }
  });

  $("#char-grid-view").html(populateCharacterGrid(characters));
});

function populateCharacterGrid(chars) {
  let charGrid = ``;

  chars.forEach((char) => {
    // if (char.new != undefined) {
    //   charGrid =
    //     `
    //         <div class="lg:col-span-2 md:col-span-4 col-span-12 h-full">
    //             ${generateCharacterCard(char)}
    //         </div> 
    //     ` + charGrid;
    //   return;
    // }

    charGrid += `
            <div class="lg:col-span-2 md:col-span-4 col-span-12 h-full">
                ${generateCharacterCard(char)}
            </div>
        `;
  });

  return charGrid;
}

function generateCharacterCard(char) {
  return `
    <char-card 
        character-name="${char.name}"
        weapon-type="${char.weaponType}"
        background-image="/assets/images/background/${char.vision.toLowerCase()}.png"
        vision-image="/assets/images/visions/${char.vision.toLowerCase()}.png"
        character-image="/assets/images/characters/${char.name.toLowerCase()}.png"
        new=${char.new}
    />
    `;
}
