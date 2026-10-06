import { useState } from 'react'
import './App.css'

function CalcDisplay({ displayValue }) {
  return <div className='Display' aria-live='polite'>{displayValue}</div>
}

function CalcButton({ buttonLabel, onClick, variant = 'default' }) {
  return (
    <button className={`Button ${variant}`} onClick={onClick} data-value={buttonLabel}>
      {buttonLabel}
    </button>
  )
}

function App() {
  const [displayValue, setDisplayValue] = useState('0')

  const buttonClickHandler = (event) => {
    const value = event.currentTarget.dataset.value

    if (value === 'CLR') {
      setDisplayValue('0')
      return
    }

    if (value === '=') {
      setDisplayValue('0')
      return
    }

    setDisplayValue((previousValue) => {
      if (previousValue === '0' && value !== '.') {
        return value
      }

      return `${previousValue}${value}`
    })
  }

  return (
    <div className='App'>
      <div className='Calculator'>
        <div className='Header'>
          <div className='HeaderBadge'>Calculator of Joaquin Manalastas - IT3A</div>
        </div>

        <CalcDisplay displayValue={displayValue} />

        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={8} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={9} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'÷'} onClick={buttonClickHandler} variant='operator' />
          <CalcButton buttonLabel={4} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={5} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={6} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'×'} onClick={buttonClickHandler} variant='operator' />
          <CalcButton buttonLabel={1} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={2} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={3} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'-'} onClick={buttonClickHandler} variant='operator' />
          <CalcButton buttonLabel={'CLR'} onClick={buttonClickHandler} variant='utility' />
          <CalcButton buttonLabel={0} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'='} onClick={buttonClickHandler} variant='accent' />
          <CalcButton buttonLabel={'+'} onClick={buttonClickHandler} variant='operator' />
        </div>
      </div>
    </div>
  )
}

export default App
