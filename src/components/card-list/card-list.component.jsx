import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";
class CardList extends Component {
  //  Multiple level component not allowed, one component class can hold only one Component (i.e. Here one parent div)
  render() {
    const { monsters } = this.props;
    // console.log('render from cardlist')
    return (
      <div className="card-list">
        {
            monsters.map((monster)=>{
                return <Card monster = {monster}/>
            })
        }
      </div>
    );
  }
}

export default CardList;
