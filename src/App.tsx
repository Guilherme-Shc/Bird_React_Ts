import { useState } from 'react';
import DataBase from './Database';
import Errors from './Errors';
import Logged from './Logged';


function App() {
const [errorMessages, setErrorMessages] = useState({msg: '', message: ''});
const [isSubmited, setIsSubmited] = useState(false);


const renderErrorMsg = (msg: string) =>{
  return msg === errorMessages.msg  && (
    <div className=''>{errorMessages.message}</div>
  )
}

const handleSubmit = (event: any) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  //finding user login info
  const userData = DataBase().find((user) => user.username === uname.value)

  //comparing user info
  if(userData){
    if(userData.password !== pass.value){
      //inv password
      setErrorMessages({msg: 'pass', message: Errors().pass})
    } else{
      setIsSubmited(true);
    }
  } else{
      //uname not found
      setErrorMessages({ msg: 'uname', message:Errors().uname})
    }
}
const logo = require('./img/logo.png')
const renderForm = (
  <div className='text-gray-600 flex w-min p-5 justify-center flex-col align-middle text-center'>
      <img src={logo} alt="panda Logo" className='w-50'/>
      <div className='text-white drop-shadow-tiktokStyle text-5xl px-5 pb-7'>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label>Username </label>
          <input type='text' name='uname' required  className='rounded'/>
          {renderErrorMsg('uname')}
        </div>
        <div className=''>
          <label>Password </label>
          <input type="password" name='pass' required className='rounded'/>
          {renderErrorMsg('pass')}
        </div>
        <div className='bg-blue-400/40 m-2  mx-16 rounded hover:bg-blue-500/80 ease-in-out duration-300'>
          <input type="submit" />
        </div>
      </form>
    </div>
)

  return (
    <div className='bg-indigo-200 w-screen h-screen flex justify-center items-center m-auto'>
      <div className='bg-cyan-100/60 w-max shadow-xl flex justify-center'>
        {isSubmited ? <Logged></Logged> : renderForm}
      </div>
    </div>
  );
}

export default App;
