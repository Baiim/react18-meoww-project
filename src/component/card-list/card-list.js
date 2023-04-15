import { Component } from "react";
import './card-list.css';
import CardComponent from "../card/card";
// import './card.css';


const CardLlist = ({monsters}) => {
      return(
      <div className="card-list">
        {
          monsters.map(
            monster => {

              return (
                <CardComponent monster={monster} />
              )
            }
          )
        }
      </div>
    )
}


// class CardLlist extends Component {
//   render(){

//     const {monsters} = this.props;

//     return(
//       <div className="card-list">
//         {
//           monsters.map(
//             monster => {

//               return (
//                 <CardComponent monster={monster} />
//               )
//             }
//           )
//         }
//       </div>
//     )
//   }
// }


export default CardLlist;