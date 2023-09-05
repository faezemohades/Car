"use client"

import { SearchManufacturer } from "."
import {useState} from 'react'
const SearchBar = () => {

    const handleSearch=()=>{
      
     }
    
    const[manufacturer, setManufacturer]=useState('')
  return (
 <form className='searchbar' onSubmit={handleSearch}>
    <SearchManufacturer setManufacturer={setManufacturer} manufacturer={manufacturer}/>
 </form>
  )
}

export default SearchBar
