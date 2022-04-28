import axios from "axios"
import { useQuery } from "react-query"

const fetchHeroId=({queryKey})=>{
    console.log(queryKey);
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const useSuperHeroeData = (heroId)=>{
    return useQuery(['super-heroe' , heroId],fetchHeroId)
}