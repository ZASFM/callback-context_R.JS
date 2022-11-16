import React,{useRef,useEffect} from "react";
import { useGlobalContext } from "../context";

const SearchForm=()=>{   
   const {setSearchTerm}=useGlobalContext();
   const searchTerm=useRef();

   const handleSubmit=(e)=>{
      e.preventDefault();
   }

   const updateSearchTerm=()=>{
      setSearchTerm(searchTerm.current.value);
   }

   useEffect(()=>{
      searchTerm.current.focus();
   },[])

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Insert you drink"
               ref={searchTerm}
               onChange={updateSearchTerm}
            />
         </form>
      </div>
   )
}

export default SearchForm;