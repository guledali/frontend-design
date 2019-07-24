import React, { Component } from 'react';
import { getCategoryList } from './state/category';
import './Category.scss';
import { getProductImageLink } from '../../utils/imageUtils';

export default class Category extends Component {
  state = { 
    category: {
      products: []
    } 
  };

  componentDidMount() {
    const loadedData = getCategoryList();

    this.setState({ category: loadedData });
  }
  
  

  render() {
    console.log(this.state.category)
    /*
     * You can get the category data from the category state:
     * const { category } = this.state;
     */

     const { category } = this.state
    return (
      <div className="hello-world">
        <ul>
          {category.products.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <img src={getProductImageLink(item)} alt={item.name} />
              <span>fr. {item.cheapestPrice.amount} kr</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
