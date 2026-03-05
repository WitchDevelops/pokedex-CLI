import type { State } from "src/state.js";

export const commandCatch = async (state: State, ...args: string[]) => {
    // needs a pokemon name as an argument
    if (args.length !== 1) {
        console.log("Needs a pokemon name you want to catch! \nUsage: catch <pokemon-name>");
        return;
    }

    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    // get info about a pokemon by name
    const pokemonData = await state.pokeApi.fetchPokemon(pokemonName);
    const pokemonBaseExperience = pokemonData.base_experience;

    // to simulate that some are harder to catch, we'll need a treshold and a random number between 0 and base XP. If the random number is lower than the treshold, the pokemon is caught.

    const catchTreshold = 40; // this can be adjusted to make it easier or harder to catch pokemon
    const randomNumber = Math.random() * pokemonBaseExperience;
    if (randomNumber < catchTreshold) {
        console.log(`${pokemonName} was caught!`);
        // store it in your pokedex (state object)
        state.caughtPokemon[pokemonName] = pokemonData;
    } else {
        console.log(`${pokemonName} escaped!`);
    }
}
