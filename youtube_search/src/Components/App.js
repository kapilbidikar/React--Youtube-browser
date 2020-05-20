import React from 'react';
import VideoList from './VideoList'
import SearchBar from './SearchBar'
import Youtube from '../API/Youtube'
import VideoDetail from './VideoDetail'

 const KEY = "AIzaSyCr90DKfeMhHWXrPGXsHINn87TBMY8pAZo";
class App extends React.Component{

    state = {videos: [], selectedvideo: null}
    
    onTermSubmit = async (term) => { 
        this.setState({selectedvideo:null})
        var searchterm = term
        this.setState({searchterm: term})
        console.log(term);
        const response = Youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 10,
                key:KEY,
                

            }

        });
        this.setState({videos: (await response).data.items})
        


    }

    onVideoSelect = (video)=> {
        this.setState({selectedvideo: video});

    }

    

  

    render(){
        return <div>
        <SearchBar onSearchSubmit = {this.onTermSubmit}/>
        {/* <div className = 'ui grid'>
            <div className = 'ui row'> */}
                <div className = 'ui segment'>
                <div className = 'eleven wide column'> <VideoDetail video = {this.state.selectedvideo}/></div>
                <div className = 'five wide column'><VideoList onVideoSelect= {this.onVideoSelect} videos = {this.state.videos}/></div>
                
            </div>
          </div>
        // </div>
    }
}

export default App;