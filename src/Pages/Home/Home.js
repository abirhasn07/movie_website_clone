import React from 'react';
import Button from '../../components/Button/Button';
import CardContainer from '../../components/CardContainer/CardContainer';
import HeroImages from '../../components/HeroImages/HeroImages';
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import Thumb from '../../components/Thumb/Thumb';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { useHomeFetch } from '../../Hooks/useHomeFetch';
import NoImage from '../../images/no_image.jpg';


const Home = () => {
    
const{  state, Loading, error,searchTerm, setSearchTerm,setIsLoadingMore}=useHomeFetch()

    console.log(state);
    return (
        <>
            {
              !searchTerm &&  state.results[0]? 
            <HeroImages 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}                
                /> 
                
                : null
            }

            <SearchBar setSearchTerm={setSearchTerm}/>

            <CardContainer header={searchTerm? 'Search Result':'Popular Movies'}>
  
            { state.results && state.results.map(movie=>(
              <Thumb
              
            key={movie.id}
            image={movie.poster_path
                    ?IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path:NoImage
            }
            clickable 
            movieId={movie.id}
              
              >{movie.title}</Thumb>



                
            ))}

            </CardContainer>


           { Loading&& <Spinner/>}

            {state.page < state.total_pages&& !Loading &&(
                
                <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>
                
            )}

          

            {/* <Button text="Load More"/> */}
        </>
    )
}

export default Home
