import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css'

class CardList extends Component{
    render(){
        const {monsters} = this.props
        return (
        <div className='card-list'>
       {monsters.map(monster =>(
           <div className='card-container' id={monster.id}>
          <center> <img alt={`monster {monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`} /> </center>
           <h2>{monster.name}</h2>
           <p>{monster.email}</p>
            </div>
       ))}
        </div>
         ) }
}

export default CardList;