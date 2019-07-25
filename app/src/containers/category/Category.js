import React, { Component } from 'react';
import { getCategoryList } from './state/category';
import './Category.scss';
//import { getProductImageLink } from '../../utils/imageUtils';
import Card from './Card'

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
      <div className="py-3">
          {category.products.map(item => (
            <Card item={item} key={item.id} />
          ))}
      </div>
    );
  }
}

