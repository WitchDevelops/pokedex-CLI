import { Cache } from "../pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    // Check cache first
    const cachedResult = this.cache.get<ShallowLocations>(url);
    if (cachedResult) {
        return cachedResult;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        // cache the result
        this.cache.add(url, result);

        return result;
    } catch (error) {
        throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    // check cache first
    const cachedResult = this.cache.get<Location>(url);
    if (cachedResult) {
        return cachedResult;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        // cache the result
        this.cache.add(url, result);

        return result;
    } catch (error) {
        throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    // check cache first
    const cachedResult = this.cache.get<Pokemon>(url);
    if (cachedResult) {
        return cachedResult;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        // cache the result
        this.cache.add(url, result);
        return result;
    } catch (error) {
        throw new Error(`Error fetching pokemon: ${(error as Error).message}`);
    }
  }

  closeCache() {
    this.cache.stopReapLoop();
  }
}

export type ShallowLocations = {
    count: number,
    next: string,
    previous: string | null,
    results: ShallowLocation[],
};

export type ShallowLocation = {
    name: string,
    url: string,
};

export type Location = {
    name: string,
    id: number,
    game_index: number,
    pokemon_encounters: PokemonEncounter[],
}

export type PokemonEncounter = {
    pokemon: {name: string, url: string},
    version_details: any[],
}

export type Pokemon = {
    base_experience: number,
    name: string;
    id: number;
    height: number;
    weight: number;
    types: { slot: number, type: { name: string, url: string } }[];
    stats: { base_stat: number, stat: { name: string, url: string } }[];
}