import React, {useEffect, useState, useContext, useCallback} from "react";
import {StoreContext} from "../../store/StoreProvider"
import debounce from "lodash.debounce";
import Container from '../Container/Container'
import {SearchContainer, SearchInput} from './Search.styled'

const Search = () => {

    const _updateSearchState = useCallback(
        debounce(
            search => {
                dispatch({type: actions.UPDATE_SEARCH,payload: search})
            }, 150
        ), []
    );

    const {
        dispatch,
        actions
    } = useContext(StoreContext);
    
    const [localSearch, setLocalSearch] = useState("");

    useEffect(() => {
        _updateSearchState(localSearch);
    }, [localSearch]);
    
    return (
        <Container>
            <SearchContainer>
                <SearchInput 
                    placeholder="Type a Pokenon name here..." 
                    value={localSearch} 
                    onChange={e => {
                        setLocalSearch(e.target.value)
                    }} 
                    data-testid="SearchInput"
                />
            </SearchContainer>
        </Container>
    );
}

export default Search;