


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newUser from '../../interfaces/newUser';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const currentDate = new Date();
  const [userData, setUserData] = useState<newUser>({
    name: "",
    email: "",
    description: "",
    file:null,
    createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`
  });
  const navigate = useNavigate();

  const Submit = async (event: React.FormEvent) => {
    if (userData.name.trim() !== '' && userData.email.trim() !== '' && userData.description.trim() !== ''  ) {
      event.preventDefault();
      try {
        const formData = new FormData();
        if (userData.file !== null) {
          formData.append('file', userData.file);
        }

        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('createdDate', userData.createdDate)
        formData.append('description', userData.description);

        const response = await fetch('https://formserver-uq2x.onrender.com/send-user', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to create post');
        }

        const responseData = await response.json();
        console.log('Post created successfully:', responseData);
        navigate('/dashboard');
        setUserData({
          name: "",
          email: "",
          description: "",
          createdDate: "",
          file: null 
        });
      } catch (error) {
        console.log(error);
      }

    } else {
      alert('Please write in all fields');
    }
  }

  const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setUserData({
        ...userData,
        file: selectedFile 
      });
    }
  }

  return (
    <form onSubmit={Submit} className='w-full h-80 flex flex-col justify-around'>
      <input name='name' id='name' value={userData.name} onChange={inputChange} type="text" placeholder="What's your name" className="w-full h-16 text-2xl  placeholder:text-gray-400  font-sans  rounded outline-none" />
      <input name='email' id='email' value={userData.email} onChange={inputChange} type="text" placeholder="Your email" className="w-full h-16 text-2xl   placeholder:text-gray-400  font-sans rounded outline-none" />
      <textarea name="description" id="description" value={userData.description} onChange={inputChange} placeholder="Tell about your project" className="w-full h-16 text-2xl   placeholder:text-gray-400  font-sans rounded outline-none resize-none"></textarea>
      <div className="w-full h-14 flex items-center justify-between">
       
        <button type='submit' className="w-48 h-14 bg-purple-500 rounded-3xl">
          <p className="text-xl text-white font-medium">Get Quote</p>
        </button>
        <div className='w-20 h-auto flex items-center justify-between '>

        <label htmlFor="fileUpload" className="text-sm">
          <input type="file" id="fileUpload" onChange={handleFileChange} className="hidden" />
          <img className='w-5 h-5' src="/Images/clip.png" alt="" />
        </label>
        <Link to={`/dashboard`}>
          <img src="/Images/arrow.png" alt="" />
        </Link>
        </div>
      
      </div>
    </form>
  )
}

export default Form;
