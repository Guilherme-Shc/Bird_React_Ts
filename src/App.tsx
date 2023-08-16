import { useState } from 'react';
import DataBase from './Database';
import Errors from './Errors';


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

const renderForm = (
  <div className=''>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label>Username </label>
          <input type='text' name='uname' required />
          {renderErrorMsg('uname')}
        </div>
        <div className=''>
          <label>Password </label>
          <input type="password" name='pass' required/>
          {renderErrorMsg('pass')}
        </div>
        <div className=''>
          <input type="submit" />
        </div>
      </form>
    </div>
)

  return (
    <div className=''>
      <div className=''>
        <div className=''>Sign In</div>
        {isSubmited ? <div>Logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
