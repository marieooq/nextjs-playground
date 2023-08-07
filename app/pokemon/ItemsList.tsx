import React from "react";

type PokemonData = {
  count: number;
  next: string;
  previous: null | number;
  results: { name: string; url: string }[];
};

export const getPokemonData = async (): Promise<PokemonData> => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch("https://pokeapi.co/api/v2/item/");
  return response.json();
};

const ItemsList = async () => {
  const { results } = await getPokemonData();

  return (
    <ul>
      {results.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemsList;
