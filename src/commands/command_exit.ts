import type { State } from "src/state.js";

export const commandExit = async (state: State) => {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close(); // cleanup
    process.exit(0);
}