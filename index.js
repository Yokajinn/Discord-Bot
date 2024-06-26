const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages"] });
const { slashRegister } = require("./Functions/slash-deployer");
const { messageChecker } = require("./Functions/Message-Checker");
const { Specifier } = require("./Functions/Specifier");
const token = process.env.TOKEN;

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
  slashRegister(); // Register slash commands when the bot comes online
  messageChecker(client); // Start messageChecker
  console.log(" ✅ Bot is online");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return; // Check if the interaction is a command

  const command = interaction.commandName;

  if (command === "roll-fruit") {
    //roll fruit command
    //This command is rng fruit roll command

    const fruitProbabilities = [
      { name: "Rocket", probability: 13 },
      { name: "Spin", probability: 13 },
      { name: "Chop", probability: 15 },
      { name: "Spring", probability: 14 },
      { name: "Bomb", probability: 14 },
      { name: "Smoke", probability: 13 },
      { name: "Spike", probability: 5 },
      { name: "Flame", probability: 12 },
      { name: "Falcon", probability: 15 },
      { name: "Ice", probability: 14 },
      { name: "Sand", probability: 7 },
      { name: "Dark", probability: 8.5 },
      { name: "Diamond", probability: 8 },
      { name: "Light", probability: 11 },
      { name: "Rubber", probability: 7.1 },
      { name: "Barrier", probability: 7.8 },
      { name: "Ghost", probability: 7.9 },
      { name: "Magma", probability: 7.3 },
      { name: "Quake", probability: 6.4 },
      { name: "Buddha", probability: 5 },
      { name: "Love", probability: 7.7 },
      { name: "Spider", probability: 6.6 },
      { name: "Sound", probability: 5.7 },
      { name: "Phoenix", probability: 3.5 },
      { name: "Portal", probability: 6.8 },
      { name: "Rumble", probability: 2.3 },
      { name: "Pain", probability: 2.8 },
      { name: "Blizzard", probability: 1.3 },
      { name: "Gravity", probability: 1.5 },
      { name: "Mammoth", probability: 1.2 },
      { name: "T-rex", probability: 1.4 },
      { name: "Dough", probability: 1.3 },
      { name: "Shadow", probability: 1.1 },
      { name: "Venom", probability: 1 },
      { name: "Control", probability: 1.8 },
      { name: "Spirit", probability: 0.8 },
      { name: "Dragon", probability: 0.7 },
      { name: "Leopard", probability: 0.3 },
      { name: "Kitsune", probability: 0.1 },
    ];

    function handleRocket() {
      const emoji = "<:Rocket:1248734891751768084>";
      return emoji;
    }

    function handleSpin() {
      const emoji = "<:Spin:1248735348708741293>";
      return emoji;
    }

    function handleSpring() {
      const emoji = "<:Spring:1248735989745193041>";
      return emoji;
    }

    function handleFlame() {
      const emoji = "<:Flame:1248743661177667694>";
      return emoji;
    }

    function handleSpike() {
      const emoji = "<:Spike:1248741331296325703> ";
      return emoji;
    }

    function handleDiamond() {
      const emoji = "<:Diamond:1248742830562738347>";
      return emoji;
    }

    function handleFalcon() {
      const emoji = "<:Falcon:1248742934187343964> ";
      return emoji;
    }

    function handleIce() {
      const emoji = "<:Ice:1248743041552875641>";
      return emoji;
    }

    function handleDark() {
      const emoji = "<:Dark:1248742888230354974>";
      return emoji;
    }

    function handleSmoke() {
      const emoji = "<:Smoke:1248741440171806851>";
      return emoji;
    }

    function handleChop() {
      const emoji = "<:Chop:1248736061904126016>";
      return emoji;
    }

    function handleBomb() {
      const emoji = "<:Bomb:1248741465514049607>";
      return emoji;
    }

    function handleSand() {
      const emoji = "<:Sand:1248742984137179220>";
      return emoji;
    }

    function handleLight() {
      const emoji = "<:Light:1248902124952223864>";
      return emoji;
    }

    function handleMagma() {
      const emoji = "<:Magma:1248902202202783785>";
      return emoji;
    }

    function handleBarrier() {
      const emoji = "<:Barrier:1248902028311396413>";
      return emoji;
    }

    function handleGhost() {
      const emoji = "<:Ghost:1248902163460259911>";
      return emoji;
    }

    function handleRubber() {
      const emoji = "<:Rubber:1248902077426565140>";
      return emoji;
    }

    function handleQuake() {
      const emoji = "<:Quake:1248906573099827331>";
      return emoji;
    }
    function handleBuddha() {
      const emoji = "<:Buddha:1248906542804238346>";
      return emoji;
    }
    function handleLove() {
      const emoji = "<:Love:1248906512739602464>";
      return emoji;
    }
    function handleSpider() {
      const emoji = "<:Spider:1248906467743109191>";
      return emoji;
    }
    function handleSound() {
      const emoji = "<:Sound:1248906436084367360>";
      return emoji;
    }
    function handlePhoenix() {
      const emoji = "<:Phoenix:1248906408116617297>";
      return emoji;
    }

    function handlePortal() {
      const emoji = "<:Portal:1248906378966466601>";
      return emoji;
    }
    function handlePain() {
      const emoji = "<:Pain:1248906183264174152>";
      return emoji;
    }
    function handleBlizzard() {
      const emoji = "<:Blizzard:1248906163140169738>";
      return emoji;
    }
    function handleRumble() {
      const emoji = "<:Rumble:1248906379893280798>";
      return emoji;
    }

    const fruitHandlers = {
      Rocket: handleRocket,
      Spin: handleSpin,
      Spring: handleSpring,
      Flame: handleFlame,
      Diamond: handleDiamond,
      Falcon: handleFalcon,
      Spike: handleSpike,
      Dark: handleDark,
      Ice: handleIce,
      Sand: handleSand,
      Bomb: handleBomb,
      Smoke: handleSmoke,
      Chop: handleChop,
      Light: handleLight,
      Magma: handleMagma,
      Barrier: handleBarrier,
      Rubber: handleRubber,
      Ghost: handleGhost,
      Quake: handleQuake,
      Buddha: handleBuddha,
      Love: handleLove,
      Spider: handleSpider,
      Sound: handleSound,
      Phoenix: handlePhoenix,
      Portal: handlePortal,
      Pain: handlePain,
      Blizzard: handleBlizzard,
      Rumble: handleRumble,
    };

    let fruit;
    let fruitHandler;
    let cumulativeProbability = 0;
    const randomNumber = Math.random() * 100;

    for (const { name, probability } of fruitProbabilities) {
      cumulativeProbability += probability;
      if (randomNumber <= cumulativeProbability) {
        fruit = name;
        fruitHandler = fruitHandlers[name]; // Get the handling function for this fruit
        break;
      }
    }

    let emoji = "";
    if (fruitHandler) {
      emoji = fruitHandler(); // Call the handling function if it exists
    }

    // Send the fruit to the interaction
    await interaction.reply(`You rolled **${fruit}** ${emoji} `);
  } else if (command === "roll-cost") {
    // roll cost command
    // calculate cost for roll based on the level
    const options = interaction.options;
    const isPremium = options.getBoolean("premium");
    const level = options.getInteger("level");

    let cost;
    if (isPremium) {
      cost = (level - 1) * 120 + 20000;
    } else {
      cost = (level - 1) * 150 + 25000;
    }

    await interaction.reply({
      content: `The cost to roll at level __${level}__ is **💵${cost}.**`,
      ephemeral: false,
    });
  }
});

client.login(token);
