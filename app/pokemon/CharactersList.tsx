import React from "react";

type PokemonData = {
  count: number;
  next: string;
  previous: null | number;
  results: { name: string; url: string }[];
};

export const getPokemonData = async (): Promise<PokemonData> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  return response.json();
};

const CharactersList = async () => {
  const { results } = await getPokemonData();

  return (
    <ul>
      {results.map((character, index) => (
        <li key={index}>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharactersList;
