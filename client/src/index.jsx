import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import data from './data'
import Shoe from './components/shoe.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        price: '',
        itemName: '',
        itemDescription: '',
        pictureUrl: '',
        shoes: [],
        indexArr: []
      };
    
    }
   

    handleClick(){
      console.log('You clicked me!')
      console.log('That hurt!')
    }
    
    componentDidMount() {
        let shoes = [];
        while(this.state.indexArr.length < 9){
          let min = 0;
          let max = 99;
          let num = Math.floor(Math.random() * (max - min)) + min; 
          if(!this.state.indexArr.includes(num)){
            this.state.indexArr.push(num)
          }
        }
        axios.get('/sponsored')
          .then(res => {
            res.data.map(function(shoe) {
              let tuple = [];
              tuple.push(shoe.price, shoe.itemName, shoe.itemDescription, shoe.pictureUrl);
              shoes.push(tuple);
            })
            this.setState({
              shoes: shoes
              
            })
            console.log(this.state.shoes)
          })
          .catch((err) => { console.log(err); });
    }
            

    render() {
      return (
        <div>
          <Shoe indexArr={this.state.indexArr} click={this.handleClick} shoes={this.state.shoes} price={this.state.price} itemName={this.state.itemName} itemDescription={this.state.itemDescription} pictureUrl={this.state.pictureUrl} />
        </div>
      );
    }
  };
  ReactDOM.render(<App />, document.getElementById('app'));