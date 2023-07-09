"use client"

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
const [manufacturer,setManufacturer]= useState("")

const handelSubmit = ()=>{
    
}

  return (
    <form className='searchbar' onSubmit={handelSubmit}>
        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar