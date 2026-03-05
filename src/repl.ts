import type { State } from "./state.js";

export const cleanInput = (input: string): string[] => {
    // splits sentences into a lowercase word array
    // there can be more than one space, remove al of them
    return input.toLowerCase().trim().split(/\s+/).filter(Boolean)
}

export const startREPL = (state: State) => {

    // prompt the user for input at the start of the REPL
    state.readline.prompt();

    state.readline.on("line", async (input) => {
        const userInput = cleanInput(input);
        
        if (userInput.length === 0) {
            console.log("Empty input. Type something.");
        } else {
            const commandName = userInput[0];
            const command = state.commands[commandName];
            const args = userInput.slice(1);
            
            if (command) {
                try {
                    await command.callback(state, ...args);
                } catch (error) {
                    console.error(`Error executing command '${commandName}':`, error);
                }
            } else {
                console.log("Unknown command");
            }
        }
        // prompt the user for the next input
        state.readline.prompt();
    });
}