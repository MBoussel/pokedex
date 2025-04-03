type PokemonType = {
  name: string;
  imgSrc?: string;
};
function PokemonCard({ pokemon }: { pokemon: PokemonType }) {
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="pokemon" /> : <p>???</p>}
    </figure>
  );
}
export default PokemonCard;
