

const Header = () => {
  return (
    <div className='w-full h-52 flex flex-col justify-between '>
        <div className='w-full h-11 flex flex-col justify-between'>
            <p className='text-lg text-purple-400'>Contact me</p>
            <div className='w-12 h-1 bg-purple-500 rounded'></div>
        </div>
        <div className='w-full h-36   flex justify-between flex-col sm:flex-row '>

            <div className='w-auto h-full'>
                    <p className='text-xl md:text-3xl lg:text-4xl  '>
                        Let me know if you want to talk
                        <br />
                        about a potential collaboration.
                        <br />
                        I'm available for freelance work.
                    </p>
            </div>
            <div className='w-auto h-full'>
              <a href="https://mail.google.com/">
                  <u className=' text-lg text-purple-400 '>gmail@mail.com</u>
              </a>
            </div>
            
        </div>
    </div>
  )
}

export default Header
