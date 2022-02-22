import React from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import {paginate} from '../utiil/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import _ from "lodash";


class Movies extends React.Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        selectedGenre: [],
        sortColumn: { path: "title", order: "asc"}
    }

    componentDidMount() {
         const genres = [{_id: '', name: "All Genres"}, ...getGenres()]
        this.setState({
             movies: getMovies(), genres})
    }

    getPageData = () => {
        const {
            currentPage, 
            pageSize, selectedGenre,
            movies: allMovies,
            sortColumn
            } = this.state;

        const filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)  
        : allMovies

         const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize)

        return {
            totalcount: filtered.length, data: movies
        }
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
        
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    }

    handleGenreSelect = genre =>{
        this.setState({
            selectedGenre: genre,
            currentPage: 1
        })
    }
  
    handlePagination = (page) => {   
    this.setState({
        currentPage: page
    })
    } 

    handleSort = sortColumn => {
       
        this.setState({ sortColumn })
    }
 
    render() { 
        const {length: count } = this.state.movies
        if (count === 0) return <p>There are no movies in the Database </p>

        const { totalcount, data: movies } = this.getPageData()
        const {
            currentPage, 
            pageSize, selectedGenre,
            movies: allMovies,
            sortColumn
            } = this.state;

  
        return (   
        <div className= "row"> 
            <div className="col-2">
                < ListGroup items={this.state.genres}
                selectedItem ={this.state.selectedGenre}
                 onItemSelect ={this.handleGenreSelect} />
            </div>
            <div className="col">
            <p>There are {totalcount} movies in the database</p>
            < MoviesTable 
            sortColumn ={sortColumn}
             movies ={movies}
             onSort = {this.handleSort} 
            onLike={this.handleLike} 
            onDelete={this.handleDelete} />
             < Pagination 
              itemsCount={totalcount}
              currentPage={currentPage}
              pageSize={pageSize} 
              onPagination={this.handlePagination} 
              />
            </div>
        </div>
              
);
    }
}
 
export default Movies;