import express, { Request, Response } from 'express';
import { pokemonArray } from './pokemonApi';
const app = express();

app.get('/', (req: Request, res: Response) => res.redirect('/pokemon'));

app.get('/pokemon', (req: Request, res: Response) => {
    const { name } = req.query;
    let queryPokemon: string =  pokemonArray.filter(q => q.includes(name || ''));
    return res.send(queryPokemon);
});

app.listen(3000, () => console.log('Server listening on port 3000'));