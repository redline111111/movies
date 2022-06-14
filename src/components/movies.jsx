import {Movie} from './movie'

export function Movies(props){
    const {movies} = props;

    return <div className="movies">
        {movies.map(movie =>(
            <Movie key = {movie.imdbID} {...movie}/>
        ))}
    </div>
}