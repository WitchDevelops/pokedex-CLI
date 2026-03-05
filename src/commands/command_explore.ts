import type { State } from "src/state.js";

export const commandExplore = async (state: State, ...args: string[]) => {
    if (args.length !== 1) {
        console.log("You need to provide location name you wish to explore. \nUsage: explore <location-name>");
        return;
    }
    const areaName = args[0];
    const fetchLocations = state.pokeApi.fetchLocation(areaName);

    // loop through data to display pokemon names
    // nested, see https://pokeapi.co/api/v2/location-area/canalave-city-area
    const pokemonList = await fetchLocations;
    console.log(`Exploring ${pokemonList.name}...`);
    console.log("Found Pokemon:");
    pokemonList.pokemon_encounters.forEach(encounter => {
        console.log(` - ${encounter.pokemon.name}`);
    });
}