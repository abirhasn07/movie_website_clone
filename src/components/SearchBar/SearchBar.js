import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '../../images/search-icon.svg'
import { Content, Wrapper } from './SearchBar.styled'

const SearchBar = ({setSearchTerm}) => {
    const [searchValue, setSearchValue] = useState('')
    const initial =useRef(true)
    useEffect(()=>{

        if (initial.current) {
            initial.current=false;

            return;
        }


      const timer=setTimeout(()=>{
          setSearchTerm(searchValue)
      },500)  

      return()=>clearTimeout(timer)
    },[setSearchTerm,searchValue])
    return (
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt="search icon" />
                <input 
                    type="text" 
                    placeholder="Search Movie"
                    onChange={event=>setSearchValue(event.currentTarget.value)}
                    value={searchValue}
                    />
            </Content>
        </Wrapper>
    )
}

export default SearchBar
