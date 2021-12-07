var crystals = ["Achroite","Agate","Alexandrite","Amazonite","Amber","Amethyst","Ametrine","Andalusite","Apatite","Aquamarine","Aventurine","Benitoite","Beryl","Bixbite","Bloodstone",
    "Brazilianite","Cairngorm","Carnelian","Chrome Diopside","Chrysoberyl","Chrysolite","Chrysoprase","Citrine","Cordierite","Demantoid Garnet","Diamond","Dichroite","Dravite","Emerald",
    "Garnet","Goshenite","Heliodor","Heliotrope","Hessonite","Hiddenite","Indigolite","Iolite","Jade","Jasper","Kunzite","Labradorite","Lapis Lazuli","Malachite","Mandarin Garnet","Moonstone",
    "Morganite","Morion","Onyx","Opal","Peridot","Pleonast","Quartz","Rhodochrosite","Rhodolite","Rubellite","Rubicelle","Ruby","Sapphire","Sard","Scapolite","Schorl","Sinhalite","Sodalite",
    "Spinel","Sugilite","Sunstone","Taaffeite","Tanzanite","Titanite","Topaz","Tourmaline","Tsavorite Garnet","Turquoise","Uvarovite","Verdelite","Violan","Zircon"
]

function getRandomCrystal() {
    var randomNumber = Math.floor(Math.random() * 77);
    document.getElementById("crystal").innerHTML = crystals[randomNumber];

    console.log( randomNumber + " has the value of "  + crystals[randomNumber] )
}