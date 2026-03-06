# What is it

It's a REPL project that I wrote during taking TS course at boot.dev. It runs in the terminal and consumes Poke API.

# How to run it
1. Clone the repo, run `nvm use` to use the same Node.js version this project is using, install dependencies with `npm install`
2. Start the REPL by running `npm run dev` in your terminal
3. REPL starts:
```
Pokedex >
```
4. Run `help` to see all the commands.
<img width="1455" height="620" alt="image" src="https://github.com/user-attachments/assets/dbc78107-b9c7-4192-8f3a-524eaca0b0af" />

## Features
Currently it supports a couple of commands and stores data in cache.

### `help`
Prints the list of all available commands

### `exit`
Exits the Pokedex
```
Pokedex > exit
Closing the Pokedex... Goodbye!
```

### `map`
Prints all available locations in batches of 20. To print the next 20, run the `map` command again.
```
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
sunyshore-city-area
sinnoh-pokemon-league-area
oreburgh-mine-1f
oreburgh-mine-b1f
valley-windworks-area
eterna-forest-area
fuego-ironworks-area
mt-coronet-1f-route-207
mt-coronet-2f
mt-coronet-3f
mt-coronet-exterior-snowfall
mt-coronet-exterior-blizzard
mt-coronet-4f
mt-coronet-4f-small-room
mt-coronet-5f
mt-coronet-6f
mt-coronet-1f-from-exterior
```

### `mapb`
Prints the previous batch of locations. If you're on the frist page, it prints
```
Pokedex > mapb
you're on the first page
```

### `explore <location-name>`
Prints all pokemon that can be found in a given location. For example:
```
Pokedex > explore canalave-city-area
Exploring canalave-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - staryu
 - magikarp
 - gyarados
 - wingull
 - pelipper
 - shellos
 - gastrodon
 - finneon
 - lumineon
```

### `catch <pokemon-name>`
Tries to catch a pokemon. It simulates difficulty based on the base XP of each pokemon by generating a random number between 0 and the base XP and comparing it with a treshold value. For example:
```
Pokedex > catch bulbasaur
Throwing a Pokeball at bulbasaur...
bulbasaur was caught!
Pokedex > catch venusaur
Throwing a Pokeball at venusaur...
venusaur escaped!
Pokedex > catch venusaur
Throwing a Pokeball at venusaur...
venusaur escaped!
Pokedex > catch venusaur
Throwing a Pokeball at venusaur...
venusaur was caught!
```

### `inspect <pokemon-name>`
Prints information about a pokemon. You can only inspect the pokemon that you've caught.
```
Pokedex > inspect bulbasaur
Name: bulbasaur
Height: 7
Weight: 69
Stats:
  -hp: 45
  -attack: 49
  -defense: 49
  -special-attack: 65
  -special-defense: 65
  -speed: 45
Types:
  - grass
  - poison
Pokedex > inspect squirtle
You haven't caught squirtle yet!
```

### `pokedex`
Prints the names of the pokemon you've caught so far. For now that information is lost between sessions.
```
Pokedex > pokedex
Your Pokedex:
- bulbasaur
- venusaur
```

# Tech used

- TypeScript
- Vitest
- Node
