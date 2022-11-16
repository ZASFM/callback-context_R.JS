import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktails=()=>{
   const {setLoading}=useGlobalContext();
   const [cocktail,setCocktail]=useState(null);
   const {id}=useParams();
   useEffect(()=>{
      const fetchDrinks=async()=>{
         setLoading(true);
         try{
            const resp=await fetch(`${url}${id}`)
            const data=await resp.json();
            if(drinks.data){
               const {
                  strDrink:name,
                  strDrinkThumb:image,
                  strAlcoholic:info,
                  strCategory:category,
                  strGlass:glass,
                  strInstructions:instructions,
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                  strIngredient5,
               }=drinks.data[0];
               const ingredients=[
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                  strIngredient5,
               ];
               const newCocktail={
                  name,
                  image,
                  info,
                  category,
                  glass,
                  instructions,
                  ingredients,
               }
               setCocktail(newCocktail);
            }else{
               setCocktail(null);
            }
         }
         catch(e){
            console.log(e.message);
         }
         finally{
            console.log('Fetching ended');
         }
         setLoading(false);
      }
      fetchDrinks();
   },[id])

   const {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients,
   }=cocktail;
      
   return (
      <div>
         <Link to="/">
            Home
         </Link>
         <h2>{name}</h2>
         <img src={image} alt={name}/>
         <span>Name:</span>
            {name}
         <span>Info:</span>
            {info}
         <span>Category:</span>
            {category}
         <span>Glass:</span>
            {glass}
         <span>instructions</span>
            {instructions}
         <span>ingredients</span>
            {ingredients.map((ingredient,index)=>{
               return ingredient?<p key={index}>{ingredient}</p>:'';
            })}
      </div>
   )
}

export default SingleCocktails;