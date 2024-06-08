const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

// Information needed for slash command
const botID = "1231643907268546723";
const serverID = "1231634195382534255";
const botToken = process.env.TOKEN;

const rest = new REST({ version: "9" }).setToken(botToken);

const slashRegister = async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(botID, serverID), {
      body: [
        new SlashCommandBuilder()
          .setName("roll-cost")
          .setDescription("Calculate the cost to roll the fruit")
          .addBooleanOption((option) => {
            return option
              .setName("premium")
              .setDescription("Are you premium in roblox?")
              .setRequired(true);
          })
          .addIntegerOption((option) => {
            return option
              .setName("level")
              .setDescription(
                "The level for which you want to calculate the roll cost"
              )
              .setRequired(true);
          }),
        new SlashCommandBuilder()
          .setName("roll-fruit")
          .setDescription("Try your luck rolling fruit"),
      ],
    });
    console.log(" ✅ Slash commands registered successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { slashRegister };
