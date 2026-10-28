import { useState } from 'react'
import './App.css'

function CalcDisplay({DisplayValue}) {
  return (
    <div className='Display'>
      {DisplayValue}
    </div>
  );
}

function CalcButton({buttonLabel, onClick}) {
  return (
    <button className='Button' onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [DisplayValue, setDisplayValue] = useState(0);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisplayValue(value);
  }

  return (
    <div className='App'>
      <div className='Header'>Calculator of Joaquin Manalastas - IT3A</div>
      <div className='Calculator'>
        <CalcDisplay DisplayValue={DisplayValue} />
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={8} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={9} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'÷'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={4} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={5} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={6} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'*'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={1} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={2} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={3} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'-'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'Clr'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={0} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'='} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'+'} onClick={buttonClickHandler}/>
        </div>
      </div>
    </div>
  );
} 

export default App