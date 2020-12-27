import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { champions } from './Champion';

class App extends Component {
    constructor(){
        super()
        this.state = {
            champions: [],
            searchField: '',
            titles: [],
        }
    }

    onsearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    componentDidMount(){
        fetch('https://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
            .then(response => response.json())
            .then(champions => {
                // Filter out champion id for each champion
                const champions_id = Object.keys(champions.data);
                // console.log(champions.data);
                var titles = []
                for (var key in champions.data){
                    titles.push(champions.data[key].title);
                }
                this.setState({champions: champions_id});
                this.setState({titles: titles});
                //console.log(this.state.titles);
                })
    }
    render(){
        const {champions, searchField, titles} =  this.state;
        const filterChamp = champions.filter(champion => {
            return champion.toLowerCase().includes(searchField.toLowerCase())
        })
        return !(champions.length)?
            <h1>Loading</h1>: 
            (
                <div className="tc">
                    <h1>Lol Cards</h1>
                    <SearchBox  searchUpdate={this.onsearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList champions={filterChamp} titles={titles} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
       
    }
}

export default App;