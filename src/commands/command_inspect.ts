import type { State } from "../state.js";

export const commandInspect = async (state: State, ...args: string[]) => {
    if (args.length !== 1) {
        console.log("you must provide a pokemon name");
        return;
    }

    let pokemonName = args[0];

    const pokemon = state.caughtPokemon[pokemonName];
    if (!pokemon) {
        console.log(`You haven't caught ${pokemonName} yet!`);
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    pokemon.stats.forEach((statInfo) => {
        console.log(`  -${statInfo.stat.name}: ${statInfo.base_stat}`);
    });
    console.log("Types:");
    pokemon.types.forEach((typeInfo) => {
        console.log(`  - ${typeInfo.type.name}`);
    });
};