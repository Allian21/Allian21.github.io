async function getRandomPokemon() {
    //only gen 1 to gen 3 pokemons
    const pokemonId = Math.floor(Math.random() * 386) + 1;
  

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      document.getElementById("pokemon-name").innerText = data.name;         
      const types = data.types.map(type => type.type.name).join(", ");
      document.getElementById("pokemon-types").innerText = types;   
      document.getElementById("pokemon-height").innerText = `${data.height / 10} meters`;
      document.getElementById("pokemon-weight").innerText = `${data.weight / 10} kg`;    
      document.getElementById("pokemon-img").src = data.sprites.front_default;
      document.getElementById("pokemon-info").style.display = "block";
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  }
  