type PokemonProps = {
  name: string;
  imgSrc?: string;
};
function PokemonCard({ pokemon }: { pokemon: PokemonProps }) {
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="pokemon" /> : <p>???</p>}
    </figure>
  );
}
export default PokemonCard;
