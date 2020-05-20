import React from 'react';

class SearchBar extends React.Component{

    state = {term:""}

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
 

    }


    render(){
        return(

        <div className = "ui container">
            <div className = 'ui segment'>
            <form onSubmit={this.onSearchSubmit}>
            <div className = "ui fluid action input">
            <input type="text" placeholder="Search Youtube..." value={this.state.term} onChange={(e) => this.setState({term:e.target.value})}/>
            <div className="ui button" onClick = {this.onSearchSubmit} >Search</div>
            
            </div>
            </form>
            </div>
        </div>
        )
    }
}

export default SearchBar;