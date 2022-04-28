import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


const fetchSuperHeroes = ()=>{
    return axios.get('http://localhost:4000/superheroes')
}
const fetchFriends = ()=>{
    return axios.get('http://localhost:4000/friends')
}
function ParallelQueryspage() {
   const {data: superHeroes}= useQuery('super-heroes',fetchSuperHeroes)
    const {data: friends}= useQuery('friends',fetchFriends)
    console.log('seperheroes' , superHeroes);
    console.log('friens' , friends);
  return (
    <div>ParallelQueryspage</div>
  )
}

export default ParallelQueryspage