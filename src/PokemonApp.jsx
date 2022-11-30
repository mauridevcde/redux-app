import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const { page, isLoading, pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      {isLoading && <p>Loading...</p>}

      {pokemons.map((pokemon, index) => (
        <ul>
          <li key={pokemon.name}>{pokemon.name}</li>
        </ul>
      ))}

      <button
        disabled={isLoading}
      onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  );
};
