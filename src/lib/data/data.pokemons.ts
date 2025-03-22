import axiosInstance from "../utils/axiosInstance";

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemons {
  count: number;
  next: boolean;
  previous: boolean;
  results: IPokemon[];
}

export interface IPokemonCard {
  id: number;
  name: string;
  order: number;
  sprites: ISprites;
  types: IPokemonType[];
}

interface ISprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}

interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export const getPokemons = async (): Promise<IPokemons> => {
  try {
    const response = await axiosInstance.get("pokemon?limit=10&offset=0");
    return response.data;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};

export const getPokemon = async (name: string): Promise<IPokemonCard> => {
  try {
    const response = await axiosInstance.get("pokemon/" + name);
    return response.data;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};
