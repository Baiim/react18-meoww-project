import { Component } from "react";
import './card.css'


// Funtional Component

const CardComponent = ({monster}) => {

     const {name, id, email } = monster;
      return (
      <div className="card-container" key={id}>
          <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
      </div>
    )
}

// Class Component

// class CardComponent extends Component {
//   render(){

//     const {name, id, email } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//           <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={name} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//       </div>
//     )
//   }
// }


export default CardComponent;