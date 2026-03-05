import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands/commands.js";
import { PokeAPI, type Pokemon } from "./api/pokeapi.js";

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    caughtPokemon: Record<string, Pokemon>;
}

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export const initState = (): State => {
   const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const commands = getCommands();

     return {
        readline: rl,
        commands: commands,
        pokeApi: new PokeAPI(300000),
        nextLocationsURL: '',
        prevLocationsURL: '',
        caughtPokemon: {}
    };
}