import type { State } from "../state.js";

export const commandPokedex = async (state: State) => {
    console.log("Your Pokedex:");
    if (Object.keys(state.caughtPokemon).length === 0) {
        console.log("You haven't caught any pokemon yet!");
        return;
    }
    for (const pokemonName in state.caughtPokemon) {
        console.log(`- ${pokemonName}`);
    }
}