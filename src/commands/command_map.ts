import type { State } from "src/state.js";

export const commandMap = async (state: State) => {
    const pokeApi = state.pokeApi;
    const nextLocationsURL = state.nextLocationsURL;
    const prevLocationsURL = state.prevLocationsURL;
    const locations = await pokeApi.fetchLocations(nextLocationsURL);

    locations.results.forEach((loc) => console.log(loc.name));
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous ?? "";
}

export const commandMapBack = async (state: State) => {

    const pokeApi = state.pokeApi;
    const prevLocationsURL = state.prevLocationsURL;
    const nextLocationsURL = state.nextLocationsURL;

    if (!prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }

    const locations = await pokeApi.fetchLocations(prevLocationsURL);

    locations.results.forEach((loc) => console.log(loc.name));
    state.prevLocationsURL = locations.previous ?? "";
    state.nextLocationsURL = locations.next;
}