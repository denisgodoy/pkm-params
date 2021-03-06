import axios from 'axios';

const req = axios.create({
    baseURL: '',
});

let pokemonArray: any = [];

function getPokemon(response: any){
   let { results } = response.data;
   for(let pokemon of results){
       pokemonArray.push(pokemon.name);
    };
};

req.get('https://pokeapi.co/api/v2/pokemon?limit=1118').then(getPokemon);

export { pokemonArray };