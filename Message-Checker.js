const fs = require("fs").promises;

const messageChecker = async (client) => {
  try {
    client.on("messageCreate", async (message) => {
      // Check if the message is in the restricted channel
      if (
        message.channel.id === "1231636920962908291" ||
        message.channel.id === "1248718533714645002" ||
        message.channel.id === "1248682732662554674"
      ) {
        // Check if the message author is not the bot itself
        if (!message.author.bot) {
          // Check if the message doesn't start with a slash command
          if (!message.content.startsWith("/")) {
            // Load or initialize the user data
            let userData = {};
            try {
              const data = await fs.readFile("userData.json");
              userData = JSON.parse(data);
            } catch (err) {
              console.error("Error loading user data:", err);
            }

            const userId = message.author.id;
            const currentTime = Date.now();
            const lastSentTime = userData[userId] || 0;
            const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

            // Check if more than a day has passed since the last disclaimer message was sent to this user
            if (currentTime - lastSentTime > oneDay) {
              try {
                // Send disclaimer message to the user
                await message.author.send({
                  content: `**__@${message.author.username}__**, you can't send messages in that channel. Your message has been removed. **This channel is only dedicated to commands.**`,
                });

                // Update last sent time for this user
                userData[userId] = currentTime;
                await fs.writeFile("userData.json", JSON.stringify(userData));
              } catch (error) {
                console.error("Error sending message:", error);
              }
            }

            // Delete the message
            try {
              await message.delete();
              console.log("Message deleted:", message.content);
            } catch (error) {
              console.error("Error deleting message:", error);
            }
          }
        }
      }
    });
    console.log(" ✅ Message checker registered successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { messageChecker };
