import React,{createContext,useContext,useState} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext=createContext();
const AppProvider=({children})=>{
   const [loading,setLoading]=useState(false);
   const [searchTerm,setSearchTerm]=useState('');
   const [cocktails,setCocKtails]=useState([]);

   return(
      <AppContext.Provider
         value={{
            loading,
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