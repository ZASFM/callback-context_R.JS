import React from "react";
import { useGlobalContext } from "../context";
import Cocktails from "./Cocktails";
import Loading from './Loading';
import Cocktails from "./Cocktails";

const CocktailList=()=>{
   const {loading,cocktails}=useGlobalContext();
   if(loading){
      return (
         <div>
            <Loading/>
         </div>
      )
   }

   if(cocktails.length<1){
      return (
         <div>
            No results match this query, try again. 
         </div>
      )
   }
   return (
      <div>
         {cocktails.map(cocktails=>{
            return (
               <div>
                  <Cocktails
                     key={cocktails.id}
                     {...cocktails}
                  />
               </div>
            )
         })}
      </div>
   )
}

export default CocktailList;