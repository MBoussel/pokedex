type PokemonType = {
  name: string;
  imgSrc?: string;
};
type NavBarType = {
  setPokemonName: (name: string) => void;
  pokemonList: PokemonType[];
};
function NavBar({ setPokemonName, pokemonList }: NavBarType) {
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => setPokemonName(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
