import { useState,useEffect } from 'react';

import logo from './logo.svg';
import CardLlist from './component/card-list/card-list';
import SearchBox from './component/search-box/search-box';
import './App.css';


const App = () => {
  

    const [seacrhMonster, setSearchMonster] = useState(''); //[value, setValue]
    const [monsters, setMonsters] = useState([]);
    const [filterMonster, setFilterMonster] = useState(monsters);
    console.log({monsters});

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    }, []);


    useEffect(() => {
      const newFilterMonster = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(seacrhMonster);
      });

      setFilterMonster(newFilterMonster);
    },[monsters, seacrhMonster]);

    const searchMonsterOnChange = (event) => {
    const seacrhMonster = event.target.value.toLocaleLowerCase();
    setSearchMonster(seacrhMonster);
  }
  return(
        <div className="App">
          <h1 className='app-title'>Monster Rolodex</h1>
            <SearchBox
                onChangeHandler={searchMonsterOnChange}
             placeholder='Search Monster'
            className='monster search-box'
        />
        <CardLlist monsters={filterMonster} />
      </div>
  )
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       seacrhMonster: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters:users}
//     },
//     () => {
//       console.log(this.state);
//     }
//     ));
//   }

//   searchMonsterOnChange = (event) => {
//     const seacrhMonster = event.target.value.toLocaleLowerCase();
//     this.setState(()=> {
//       return {seacrhMonster}
//     })
//   }

//   render(){

//     const {seacrhMonster,monsters} = this.state;
//     const {searchMonsterOnChange} = this;
//     const filterMonster = this.state.monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(this.state.seacrhMonster);
//           });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//         onChangeHandler={searchMonsterOnChange}
//         placeholder='Search Monster'
//         className='monster search-box'
//         />
//         <CardLlist monsters={filterMonster} />
//       </div>
//     );
//   }
// }

export default App;
 