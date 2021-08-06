const validHero = ["Abaddon",
    "Alchemist",
    "Axe",
    "Beastmaster",
    "Brewmaster",
    "Bristleback",
    "Centaur_Warrunner",
    "Chaos_Knight",
    "Clockwerk",
    "Dawnbreaker",
    "Doom",
    "Dragon_Knight",
    "Earth_Spirit",
    "Earthshaker",
    "Elder_Titan",
    "Huskar",
    "Io",
    "Kunkka",
    "Legion_Commander",
    "Lifestealer",
    "Lycan",
    "Magnus",
    "Mars",
    "Night_Stalker",
    "Omniknight",
    "Phoenix",
    "Pudge",
    "Sand_King",
    "Slardar",
    "Snapfire",
    "Spirit_Breaker",
    "Sven",
    "Tidehunter",
    "Timbersaw",
    "Tiny",
    "Treant_Protector",
    "Tusk",
    "Underlord",
    "Undying",
    "Wraith_King",
    "Anti-Mage",
    "Arc_Warden",
    "Bloodseeker",
    "Bounty_Hunter",
    "Broodmother",
    "Clinkz",
    "Drow_Ranger",
    "Ember_Spirit",
    "Faceless_Void",
    "Gyrocopter",
    "Hoodwink",
    "Juggernaut",
    "Lone_Druid",
    "Luna",
    "Medusa",
    "Meepo",
    "Mirana",
    "Monkey_King",
    "Morphling",
    "Naga_Siren",
    "Nyx_Assassin",
    "Pangolier",
    "Phantom_Assassin",
    "Phantom_Lancer",
    "Razor",
    "Riki",
    "Shadow_Fiend",
    "Slark",
    "Sniper",
    "Spectre",
    "Templar_Assassin",
    "Terrorblade",
    "Troll_Warlord",
    "Ursa",
    "Vengeful_Spirit",
    "Venomancer",
    "Viper",
    "Weaver",
    "Ancient_Apparition",
    "Bane",
    "Batrider",
    "Chen",
    "Crystal_Maiden",
    "Dark_Seer",
    "Dark_Willow",
    "Dazzle",
    "Death_Prophet",
    "Disruptor",
    "Enchantress",
    "Enigma",
    "Grimstroke",
    "Invoker",
    "Jakiro",
    "Keeper_of_the_Light",
    "Leshrac",
    "Lich",
    "Lina",
    "Lion",
    "Nature's_Prophet",
    "Necrophos",
    "Ogre_Magi",
    "Oracle",
    "Outworld_Destroyer",
    "Puck",
    "Pugna",
    "Queen_of_Pain",
    "Rubick",
    "Shadow_Demon",
    "Shadow_Shaman",
    "Silencer",
    "Skywrath_Mage",
    "Storm_Spirit",
    "Techies",
    "Tinker",
    "Visage",
    "Void_Spirit",
    "Warlock",
    "Windranger",
    "Winter_Wyvern",
    "Witch_Doctor",
    "Zeus",];

module.exports = (msg, arg) => {
    arg.forEach(element => {
        if ((validHero.indexOf(element)) === -1) {
            if (Math.floor(Math.random() * 100) < 5) {
                msg.reply(`DUDE PLEASE REFER THIs HERO POOL!! ${validHero}`)
            } else{
                msg.channel.send(`${element} is not a valid hero...`)
            }
        } else {
            msg.channel.send(`https://dota2.fandom.com/wiki/${arg}`);
        }
    });
}