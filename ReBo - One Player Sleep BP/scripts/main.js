import { system, world } from "@minecraft/server";
import * as utils from "./utils";
// Map to store sleep timers for each player
const sleepTimers = new Map();

system.runInterval(() => {
    checkPlayersSleeping();
})

function checkPlayersSleeping() {
    const players = world.getPlayers();

    players.forEach(player => {
        const isSleeping = player.isSleeping;
        const timer = sleepTimers.get(player);

        if (isSleeping) {
            if (!timer) {
                // Start a new sleep timer for the player
                sleepTimers.set(player, 0);
            }

            // Increment the sleep timer for the player
            sleepTimers.set(player, sleepTimers.get(player) + 1);

            // Check if the player has completed sleeping (adjust the threshold as needed)
            if (sleepTimers.get(player) >= 99) {
                // Run your desired code here
                world.setTimeOfDay(0);
                // Reset the sleep timer for the player
                sleepTimers.set(player, 0);
            }
        } else {
            // Reset the sleep timer for the player if they are not sleeping
            sleepTimers.delete(player);
        }
    });
}
