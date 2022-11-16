import React,{createContext,useContext,useEffect,useState,useEffect,useCallback} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext=createContext();
const AppProvider=({children})=>{
   const [loading,setLoading]=useState(false);
   const [searchTerm,setSearchTerm]=useState('a');
   const [cocktails,setCocktails]=useState([]);

   const fetchDrinks=useCallback(async()=>{
      setLoading(true);
      try{ 
         const resp=await fetch(`${url}${searchTerm}`);
         const data=await resp.json();
         const {drinks}=data;
         if(drinks){
            const newDrinks=drinks.map(drink=>{
               const {
                  idDrink,
                  strDrink,
                  strDrinkThumb,
                  strAlcoholic,
                  strGlass,
               }=drink;
               return {
                  id:idDrink,
                  name:strDrink,
                  image:strDrinkThumb,
                  info:strAlcoholic,
                  glass:strGlass,
               }
            })
            setCocktails(newDrinks);
         }
         setCocktails([]);
      }
      catch(e){
         console.log(e.message);
      }
      finally{
         console.log('Fetching ended');
      }
      setLoading(false);
   },[searchTerm])

   useEffect(()=>{
      fetchDrinks();
   },[fetchDrinks])

   return(
      <AppContext.Provider
         value={{
            loading,
            setLoading,
            cocktails,
            setSearchTerm,
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export const useGlobalContext=()=>{
   return useContext(AppContext);
}
export {AppContext,AppProvider}