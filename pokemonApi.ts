import axios from 'axios';

const req = axios.create({
    baseURL: '',
});

let pokemonArray: any = [];

function getPokemon(response: any){
   let { results, next } = response.data;
   for(let pokemon of results){
       pokemonArray.push(pokemon.name);
    };
    axios.get(next).then(getPokemon);
};

req.get('https://pokeapi.co/api/v2/pokemon').then(getPokemon);

export { pokemonArray };