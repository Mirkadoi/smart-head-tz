import React, { Component } from 'react';
import './App.css';
import './Font.css'
import Header from './components/Header'
import GameList from './components/GameList'


const data = [
  {name: 'Divinity: Original Sin II', publisher: 'Larian Studios', score: 8.7, scoreColor: '#36af47', reviews: 'Positive', valueReviews:'(10,118)', mainGenre: 'RPG',releaseDate: '14 Sep,2017', status:'in library', statusColor: '#36af47', setting1: <i class="fas fa-gamepad"></i>, setting2:<i class="fas fa-cog"></i>, setting3: <i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 1.png")},
  {name: 'Bayonetta', publisher: 'PlatinumGames', score: 8.4, scoreColor: '#36af47', reviews: 'Positive',valueReviews:'(4,123)', mainGenre: 'Action',releaseDate: '11 Apr, 2017', status:'in library', statusColor: '#36af47', setting1: <i class="fas fa-gamepad"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 2.png")},
  {name: 'Mass Effect: Andromeda', publisher: 'BioWare', score: '5.0', scoreColor: '#f7981c', reviews: 'Mixed',valueReviews:'(13,458)', mainGenre: 'RPG',releaseDate: '21 Mar, 2017', status:'on sale', statusColor: '#1991eb', setting1: <i class="fas fa-dollar-sign"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 3.png")},
  {name: 'Prey', publisher: 'Arkane Studios', score: '7.9', scoreColor: '#36af47', reviews: 'Positive',valueReviews:'(5,490)', mainGenre: 'Action',releaseDate: '4 May, 2017', status:'on sale', statusColor: '#1991eb', setting1: <i class="fas fa-dollar-sign"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 4.png")},
  {name: 'Flatout 3: Chaos & Destruction', publisher: 'Team 6 Studios', score: '2.5', scoreColor: '#ed1c24', reviews: 'Negative',valueReviews:'(1,540)', mainGenre: 'Racing',releaseDate: '13 Dec, 2011', status:'on sale', statusColor: '#1991eb', setting1: <i class="fas fa-dollar-sign"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 5.png")},
  {name: 'Yonder: The Cloud Catcher Chronicles', publisher: 'Prideful Sloth', score: '7.3', scoreColor: '#f7981c', reviews: 'Positive',valueReviews:'(50)', mainGenre: 'Adventure',releaseDate: '18 Jul, 2017', status:'on sale', statusColor: '#1991eb', setting1: <i class="fas fa-dollar-sign"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 6.png")},
  {name: 'Regions Of Ruin', publisher: 'Vox', score: <p style={{color: 'black', paddingLeft: '15px'}}>-</p>, scoreColor: '', reviews: '',valueReviews:'No user reviews', mainGenre: 'Action',releaseDate: '5 Oct, 2017', status:'in development', statusColor: '#bbc5d5', setting1:'', setting2:'', setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 7.png")},
  {name: 'NieR: Automata', publisher: 'Square Enix', score: '8.4', scoreColor: '#36af47', reviews: 'Positive',valueReviews:'(15,000)', mainGenre: 'RPG',releaseDate: '17 Mar, 2017', status:'on sale', statusColor: '#1991eb', setting1: <i class="fas fa-dollar-sign"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 8.png")},
  {name: 'Cuphead', publisher: 'StudioMDHR Entertainment Inc.', score: '8.3', scoreColor: '#36af47', reviews: 'Positive',valueReviews:'(6,343)', mainGenre: 'Action',releaseDate: '29 Sep, 2017', status:'on sale', statusColor: '#1991eb', setting1: <i class="fas fa-dollar-sign"></i>, setting2:<i class="fas fa-cog"></i>, setting3:<i class="fas fa-share-alt"></i>, img: require("./img/preview/Layer 9.png")},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Content">
          <p className="hedline">PC GAMES</p>
          <p className="text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <GameList data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
