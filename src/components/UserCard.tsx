
import { FC } from "react"
import userCard from "../../interfaces/userCard"

const UserCard:FC<userCard> = ({name, email, createdDate}) => {
  return (
    <div className='w-full h-16 bg-white rounded-md flex  items-center justify-between m-3 p-3 sm:p-8 pt-0 pb-0'>
        <div className="flex  items-center">
            <div className="w-8 h-8 bg-purple-200 rounded-md flex items-center  justify-center">
                <img className="w-4 h-4" src="/Images/user.png" alt="" />
            </div>
            <p className="sm:text-xl text-md font-medium pl-2">{name}</p>
        </div>
    
        <p className="sm:text-xl text-md font-medium">{email}</p>
        <p className="sm:text-lg text-md font-medium">{createdDate}</p>


    </div>
  )
}

export default UserCard