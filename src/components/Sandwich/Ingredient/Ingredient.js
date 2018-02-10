import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredient.css';

class Ingredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread' ):
                ingredient = <div className={classes.Bread}></div>;
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>   
                break;    
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>   
                break;
            default:
                ingredient = null;     
        }

        return ingredient;
    }
}

export default Ingredient;