export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
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