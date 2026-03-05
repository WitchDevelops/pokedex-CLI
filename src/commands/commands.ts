import type { CLICommand } from "src/state.js";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";

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
    },
    explore: {
      name: "explore",
      description: "Prints all pokemon that can be found in a location. Usage: explore <location-name>",
      callback: commandExplore
    },
    catch: {
      name: "catch",
      description: "Prints information about a pokemon. Usage: catch <pokemon-name>",
      callback: commandCatch
    }
  };
}