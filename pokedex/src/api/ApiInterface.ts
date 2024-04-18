export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface Pokemon {
  name: string;
  url: string;
}