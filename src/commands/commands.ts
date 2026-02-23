import type { CLICommand } from "src/state.js";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapBack } from "./command_map.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
        name: "help",
        description: "Prints available commands",
        callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Prints all available locations in batches of 20.",
      callback: commandMap
    },
    mapb: {
      name: "mapb",
      description: "Prints the previous batch of locations.",
      callback: commandMapBack
    }
  };
}