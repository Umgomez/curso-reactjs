import { useState, useEffect } from "react";
const CAT_PREFIX_URL = 'https://cataas.com/cat/'

export function useCatImage ({ fact }) {
    const [imageId, setImageId] = useState();
  
    useEffect(() => {
      if (!fact) return
      const firstTrheeWord = fact.split(' ', 3).join(' ')
  
      fetch(`https://cataas.com/cat/says/${firstTrheeWord}?json=true`)
        .then(res => res.json())
        .then(response => {
          const { _id } = response
          setImageId(_id)
        })
    }, [fact])
  
    return { imageId: `${CAT_PREFIX_URL}${imageId}` } 
  }