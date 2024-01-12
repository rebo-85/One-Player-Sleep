import { world } from "@minecraft/server";

/**
 * Run commands synchronously.
 * @param {...string} commands - The commands to be executed.
 */
export function runCommand(...commands) {
    commands.forEach(command => {
        world.getDimension("overworld").runCommand(`${command}`);
    });
}

/**
 * Run commands asynchronously.
 * @param {...string} commands - The commands to be executed.
 */
export function runCommandAsync(...commands) {
    commands.forEach(command => {
        world.getDimension("overworld").runCommandAsync(`${command}`);
    });
}

/**
 * Get the block at a specific location in the overworld dimension.
 * @param {object} location - The location object with x, y, and z coordinates.
 * @returns {object} - The block at the specified location.
 */
export function getBlock(location) {
    return world.getDimension("overworld").getBlock({ x: location.x, y: location.y, z: location.z });
}
