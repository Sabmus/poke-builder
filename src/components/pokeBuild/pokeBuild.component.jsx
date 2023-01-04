const PokeBuild = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <ul>
        {pokemon.stats.map((stat, id) => (
          <li key={id}>
            {stat.stat.name} - {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeBuild;
