import { runInterval } from "./ReBo/Utils";
import { world } from "./ReBo/Constants";
const sleepTimers = new Map();

runInterval(() => {
  const players = world.getPlayers();

  players.forEach((player) => {
    const isSleeping = player.isSleeping;
    const timer = sleepTimers.get(player);

    if (isSleeping) {
      if (!timer) sleepTimers.set(player, 0);

      sleepTimers.set(player, sleepTimers.get(player) + 1);

      if (sleepTimers.get(player) >= 99) {
        world.setTimeOfDay(0);
        sleepTimers.set(player, 0);
      }
    } else sleepTimers.delete(player);
  });
});
