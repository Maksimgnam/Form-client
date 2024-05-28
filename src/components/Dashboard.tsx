import { useState, useEffect } from 'react'
import UserCard from './UserCard';
import User from '../../interfaces/user';

const Dashboard = () => {

  const [users, setUsers]= useState<User[]>([]);
  useEffect(()=>{
    const fetchJars = async ()=>{
      try{
        const response = await fetch('https://formserver-uq2x.onrender.com/api/users');
        const data =  await response.json();
        setUsers(data)

      }catch(error){
        console.log(error)
      }
    }

    fetchJars()

  }, [])


  return (
    <div className='w-full min-h-screen bg-purple-200 p-6 pr-4 pl-4  sm:pr-20 sm:pl-20 flex flex-col  items-center '>
      <h2 className='text-2xl font-medium'>All users</h2>
      <div className='w-full h-auto flex flex-wrap mt-2'>
        {
          users.map((item)=>(
            <UserCard key={item.id} name={item.name} email={item.email} createdDate={item.createdDate} />
          ))
        }
     
      
      </div>
 
    </div>
  )
}

export default Dashboard