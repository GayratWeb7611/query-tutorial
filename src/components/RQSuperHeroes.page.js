import useSuperHeroesData from "../hooks/useSuperHeroesData"
import { Link } from 'react-router-dom';

function RQSuperHeroesPage() {
  const onSuccess = (sas)=>{
    console.log('onSuccess',sas);
  }
  const onError = ()=>{
    console.log('onError');
  }
  const {data ,  isLoading , error , isError } = useSuperHeroesData(onSuccess,onError)
  if(isLoading){ return <div> loading... </div>}
  if(isError){
   return <h2> {error.message} lflskfksldj</h2>
  }
   return (
    <div>
      <h1> Super Heroes  useQuery</h1>
      {data?.data.map((user,i)=>{
        return(<h2 key={i} >
          <Link to={`/rq-superheroes/${user.id}`}>
            {user.name}
          </Link>
        </h2>)})}
    </div>
  )
}

export default RQSuperHeroesPage