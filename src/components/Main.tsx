
import Header from './Header'
import Form from './Form'
import Contacts from './Contacts'

const Main = () => {
  return (
    <div className='w-full min-h-screen p-10 pr-10  sm:p-10 sm:pr-32 sm:pl-20 pl-10'>
        <Header/>
        <Form/>
        <Contacts/>
    </div>
  )
}

export default Main