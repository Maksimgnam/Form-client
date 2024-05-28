

const Contacts = () => {
  return (
    <div className='w-full h-28  flex flex-col items-center justify-between mt-12'>
      <h2 className="text-4xl font-sans">Let's be friends</h2>
      <div className="w-48 h-14   flex  items-center justify-between">
        <a href="https://www.instagram.com/">
          <button className="w-12 h-12 bg-fone bg-cover rounded flex items-center justify-center">
            <img className="w-5 h-5" src="/Images/instagram.png" alt="" />
          </button>
        </a>
        <a href="https://www.facebook.com/">
          <button className="w-12 h-12 bg-fone bg-cover rounded flex items-center justify-center">
            <img  className="w-6 h-6"  src="/Images/facebook.png" alt="" />
          </button>
        </a>
        <a href="https://www.pinterest.com/">
          <button className="w-12 h-12 bg-fone bg-cover rounded flex items-center justify-center">
            <img src="/Images/pinterest.png" alt="" />
          </button>
        </a>  

      </div>
    </div>
  )
}

export default Contacts