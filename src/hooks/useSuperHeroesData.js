import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
const fetchSuperHeroes = ()=>{
  return axios.get('http://localhost:4000/superheroes')
}
function useSuperHeroesData(onSuccess, onError) {
    return useQuery('super-heroes',fetchSuperHeroes,{
    onSuccess,
    onError
  })
}

export default useSuperHeroesData