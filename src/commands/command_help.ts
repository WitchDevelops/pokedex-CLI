import type { State } from "../state.js";

export const commandHelp = async (state: State) => {
    console.log("Welcome to the Pokedex!\nUsage:");

    Object.entries(state.commands).forEach(([name, command]) => {
        console.log(`${name}: ${command.description}`)
    })
}