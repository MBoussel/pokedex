type PokemonType = {
  name: string;
  imgSrc?: string;
};
type NavBarType = {
  setPokemonName: (name: string) => void;
  pokemonList: PokemonType[];
};
function NavBar({ setPokemonName, pokemonList }: NavBarType) {
  const pikapika = (name: string) => {
    setPokemonName(name);
    if (name === "Pikachu") {
      alert("Pika Pika Pikachu !!!");
    }
  };
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => pikapika(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
