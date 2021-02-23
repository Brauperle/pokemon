
import React from "react";
import {render, fireEvent, waitFor} from "./test.utils";
import Search from "../app/Search/Search";
import List from "../app/List/List";

jest.mock("../api/api", () => {
    return {
        getPokemons : () => {
            return new Promise(resolve => {
                resolve({results:[
                    {
                        "name": "bulbasaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/1/"
                    },
                    {
                        "name": "ivysaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/2/"
                    },
                    {
                        "name": "venusaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/3/"
                    },
                    {
                        "name": "charmander",
                        "url": "https://pokeapi.co/api/v2/pokemon/4/"
                    },
                    {
                        "name": "charmeleon",
                        "url": "https://pokeapi.co/api/v2/pokemon/5/"
                    },
                    {
                        "name": "charizard",
                        "url": "https://pokeapi.co/api/v2/pokemon/6/"
                    },
                    {
                        "name": "squirtle",
                        "url": "https://pokeapi.co/api/v2/pokemon/7/"
                    },
                    {
                        "name": "wartortle",
                        "url": "https://pokeapi.co/api/v2/pokemon/8/"
                    },
                    {
                        "name": "blastoise",
                        "url": "https://pokeapi.co/api/v2/pokemon/9/"
                    }
                ]})
            })
        },
        getPokemon : jest.fn()
    }
});

test("[SEARCH] should render the correct pokemon list-items depending on searh state", async () => {   
    
    /**
     * Starting with a total of 9 Pokemon 
     * Then searching for Bulbasaur and expect to have only 1 result left
     */
    
    const {queryByTestId, findByTestId} = render(
        <>
            <Search />
            <List />
        </>
    );  
    
    const s = queryByTestId("SearchInput");
    const lp = await findByTestId("ListPokemons");

    expect(lp.children.length).toBe(9)
    fireEvent.change(s, { target: { value: 'Bulbasaur' } });
    await waitFor(() => expect(lp.children.length).toBe(1));

});