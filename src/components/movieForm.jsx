import React  from 'react';

const MoviesForm = ({match, history}) => {
    <div></div>
    return ( <div>
        <h1>Movies {match.params.id}</h1>
        <button 
        className="btn btn-primary"
         onClick={() => history.push('/movies')}>
             Save
        </button>
    </div> );
}
 
export default MoviesForm;