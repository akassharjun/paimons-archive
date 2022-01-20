let characters = [
    {
        "id" : "KGSE",
        "name" : "Keqing",
        "weaponType" : "Sword",
        "vision" : "Electro"
    },
    {
        "id" : "KKSA",
        "name" : "Kaedehara Kazuha",
        "weaponType" : "Sword",
        "vision" : "Anemo"
    },
    {
        "id" : "HTPP",
        "name" : "Hu Tao",
        "weaponType" : "Polearm",
        "vision" : "Pyro"
    },
    {
        "id" : "KSBE",
        "name" : "Kujou Sara",
        "weaponType" : "Bow",
        "vision" : "Electro"
    },
    {
        "id" : "TABH",
        "name" : "Tartaglia",
        "weaponType" : "Bow",
        "vision" : "Hydro"
    },
    {
        "id" : "XOPA",
        "name" : "Xiao",
        "weaponType" : "Polearm",
        "vision" : "Anemo"
    },
    {
        "id" : "DCCP",
        "name" : "Diluc",
        "weaponType" : "Claymore",
        "vision" : "Pyro"
    },
    {
        "id" : "NGCG",
        "name" : "Ningguang",
        "weaponType" : "Catalyst",
        "vision" : "Geo"
    },
    {
        "id" : "AOSG",
        "name" : "Albedo",
        "weaponType" : "Sword",
        "vision" : "Geo"
    },
    {
        "id" : "KASC",
        "name" : "Kamisato Ayaka",
        "weaponType" : "Sword",
        "vision" : "Cryo"
    },
    {
        "id" : "DABC",
        "name" : "Diona",
        "weaponType" : "Bow",
        "vision" : "Cryo"
    },
    {
        "id" : "BTPS",
        "name" : "Bennett",
        "weaponType" : "Sword",
        "vision" : "Pyro"
    }
]

const characterDb = new PouchDB("characters", { auto_compaction: true });

$(document).on("ready", async () => {
    // var firstTime = localStorage.getItem("first_time");
    // if(!firstTime) {
    //     // first time loaded!
    //     localStorage.setItem("first_time","1");

    //     // save json data to indexed db
    //     $.getJSON('/characters.json', function(characters) {
    //         characterDb.bulkDocs(characters.map((c) => ({ _id: c.id, ...c })));
    //      });
    // } 

    // const docs = await characterDb.allDocs({ include_docs: true });

    // let chars = docs.rows.map((x) => {
    //     console.log("hello");
    //     console.log(x);
        
    //     return x.doc;
    // });

    $("#char-grid-view").html(populateCharacterGrid(characters))
});

function populateCharacterGrid(chars){
    let charGrid = ``

    chars.forEach(char => {
        console.log(char)

        charGrid += `
            <div class="lg:col-span-3 md:col-span-4 col-span-12 h-full">
                ${generateCharacterCard(char)}
            </div>
        `
    });

    return charGrid;
}


function generateCharacterCard(char){
    return `
    <char-card 
        character-name="${char.name}"
        weapon-type="${char.weaponType}"
        background-image="/assets/images/background/${char.vision.toLowerCase()}.png"
        vision-image="/assets/images/visions/${char.vision.toLowerCase()}.png"
        character-image="/assets/images/characters/${char.name.toLowerCase()}.png"
    />
    `
}