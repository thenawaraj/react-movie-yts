import { useState } from 'react'
import './Search.css'

export const Search=(props)=>{

    const [word,setWord] = useState('');

    const searchHandler = (e)=>{
        setWord(e.target.value)
    }

    const setSearchMovie = ()=>{
        props.changeKeyword(word);
    }
    
    return<><section>
    <input className='inptext' type="text" placeholder="Enter Keywords" onChange={searchHandler}></input>
    <button className='search-btn'type='submit' onClick={setSearchMovie}>Search</button>
    </section>
    </>
    }