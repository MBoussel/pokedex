type PokemonType = {
  name: string;
  imgSrc?: string;
};
function PokemonCard({ pokemon }: { pokemon: PokemonType }) {
  return (
    <figure className={`card ${pokemon.name}`}>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt="pokemon" className="cardImg" />
      ) : (
        <p>???</p>
      )}
      <figcaption className="pokeName">{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
