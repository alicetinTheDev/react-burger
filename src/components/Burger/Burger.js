import React, { Component } from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngrediant';
import classes from './Burger.module.css';

class Burger extends Component {

mapIngredients(){
        const { ingredients } = this.props;
        let ingredientsArray  = [];
        Object.keys(ingredients).forEach(ingKey => {
          for (let i = 0; i < ingredients[ ingKey ]; i++)
            ingredientsArray.push(<BurgerIngredient key={ ingKey + i } type={ ingKey }/>)
        });
        
        return ingredientsArray.length > 0 ? ingredientsArray : <p>Please add some ingredients!</p>;
      }

    render(){
        return ( 
            <div className={ classes.Burger }>
              <BurgerIngredient type='bread-top'/>
                { this.mapIngredients() }
              <BurgerIngredient type='bread-bottom'/>     
            </div>
          );
    }
}

export default Burger;

// const burger = (props) => {     
    
//     let transformedIngredients = Object.keys(props.ingredients)
//         .map(igKey => {
//             return [...Array( props.ingredients[igKey] )].map((_,i) => {
//                 return <BurgerIngredient key={igKey+i} type={igKey} />; 
//             });
//         }).reduce((array, element) => {
//             return array.concat(element);
//         }, []);

//     console.log(transformedIngredients); 

//     if(transformedIngredients.length === 0) {
//         transformedIngredients = <p>Please start adding ingredients!</p>;
//     }
               
//     return (        
//         <div className={classes.Burger}>
//             <BurgerIngredient type="bread-top" />
//             {console.log(transformedIngredients)}
//             {console.log(Object.keys(props.ingredients))}
//             {console.log(...Array(props.ingredients["tomato"]))}
//             {transformedIngredients}
//             <BurgerIngredient type="bread-bottom" />
//         </div>
//     );
// };

// export default burger;
