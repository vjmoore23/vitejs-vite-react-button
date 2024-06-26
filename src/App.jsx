import { useState } from 'react';
import './App.css';
import './Loader.css';
import MyButton from './MyButton.jsx';

//Create the App function
//Import MyButton React element from MyButton.jsx
//Input MyButton paraments for onClick behavior & style
//Onclick function for Loader
const App = () => {
  //Loader state variable
  const [isShown, setIsShown] = useState(false);

  //When button is clicked the loader will show
  const clickEvent = () => {
    setIsShown((current) => !current);
  };
  
  //Render function
  //loader div will show when isShown useState = true
  //imported MyButton element with onlick handler and styling
  return (
    
    <div class='main-div'>
       {isShown && <div class='loader'></div>}
   
      <MyButton
        onClick={clickEvent}
        style={{ backgroundColor: '#05A1E9', color: 'white', margin:'1cm' }}
      >
        Reusable Button
      </MyButton>
    </div>
  );
};

export default App;
