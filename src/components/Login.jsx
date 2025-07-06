import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Link } from 'react-router'

const Login = () => {

  const [data, setData] = useState({ Email: "", Password: "" })
  const [submitData , setSubmitData] = useState(null)
  const [error , setError] = useState({})


  function handleSubmit(e){
    e.preventDefault()
    console.log(data)
    if(validation()){
         setSubmitData(data)
         setData({ Email: "", Password: "" })
         console.log(submitData)
    }
  }
    function validation(){
      let obj = {}
      let value = true

      if(!data.Email.trim()){
        value = false
        obj.email = "Enter a valid Email"
      }
      if(!data.Password.trim()){
        value = false
        obj.password = "Enter a valid Password"
      }
      
      setError(obj)
      return value
    }
  return (
    <div className=" w-[100vW] h-[100vh] flex justify-center items-center" id='main'>
      <div className=" border-black  bg-[#F0FFFFAB] border border-[2px] w-[400px] h-[450px] rounded-[15px] flex ">
        <form className=' w-[100%] h-[100%] inset-shadow-black flex flex-col' action="" onSubmit={handleSubmit}>
          <h2 className='text-[25px] text-center mt-[20px] text-black'> Login</h2>
          <div className=" flex justify-center relative  mt-[30px] h-[50px]" id=''>
            <div className='w-[15%] ml-[260px] text-black relative  flex justify-center items-center  '><span className="absolute  text-[22px] ">
              <IoMdMail />
            </span></div>
            <input className='border font-medium border-[2px] text-black border-black rounded-[5px] absolute w-[80%] flex justify-center h-[50px] pl-[10px]' type="email" placeholder='Enter your Email ' value={data.Email} onChange={(e) => {
              setData({ ...data, Email: e.target.value })
            }} />
         


          </div>
             {error.email  && <p className='text-red-600 pl-[50px] font-medium'>{error.email}</p>}

          <div className=" flex justify-center relative  mt-[30px] h-[50px]">
            <div className='w-[15%] text-black   ml-[260px] relative  flex justify-center items-center '>
              <span className="absolute text-black-900 text-[22px] ">
                <FaLock />
              </span>
            </div>
            <input className='border font-medium border-[2px] text-black  border-black rounded-[5px] absolute w-[80%] flex justify-center h-[50px] pl-[10px]' type="password" placeholder='Enter your Password' onChange={(e) => {
              setData({ ...data, Password: e.target.value })
            }} value={data.Password} />
          

          </div>
            {error.password &&  <p className='text-red-600 pl-[50px] font-medium'>{error.password}</p>}
         


          <div className=" mt-[7px] text-black">
            <label className='pl-[40px]'><input className='' type="checkbox" /> Remember me</label>
            <a className='pl-[75px] ' href="#">Forgot Password?</a>
          </div>
          <button className='mt-[50px] border cursor-pointer bg-black border-white border-[2px] w-[250px] h-[40px] ml-[75px] rounded-[20px] text-white' type="submit">Login</button>
          <div className="ml-[80px] mt-[20px] text-black">
            <p>Don't have an account? <Link to={"/signup"}><button className='text-purple-900 cursor-pointer font-medium' >Signup</button></Link> </p>
          </div>
        </form>
      </div>

      {submitData && 
      <div className='absolute top-[620px] border w-[400px] h-[100px] bg-[#F0FFFFAB] text-black font-medium rounded-[15px] flex flex-col justify-center pl-[20px]'>
       <p>Email :- {submitData.Email}</p>
       <p>Password :- {submitData.Password}</p>
      </div>}
    </div>
  )
}

export default Login