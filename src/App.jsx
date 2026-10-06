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
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)

  const calculate = (leftOperand, rightOperand, selectedOperator) => {
    switch (selectedOperator) {
      case '+':
        return leftOperand + rightOperand
      case '-':
        return leftOperand - rightOperand
      case '×':
        return leftOperand * rightOperand
      case '÷':
        return rightOperand === 0 ? 'Error' : leftOperand / rightOperand
      default:
        return rightOperand
    }
  }

  const handleNumberInput = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit))
      setWaitingForSecondOperand(false)
      return
    }

    setDisplayValue((previousValue) => {
      if (previousValue === '0') {
        return String(digit)
      }

      return `${previousValue}${digit}`
    })
  }

  const handleDecimalInput = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.')
      setWaitingForSecondOperand(false)
      return
    }

    if (!displayValue.includes('.')) {
      setDisplayValue((previousValue) => `${previousValue}.`)
    }
  }

  const handleOperatorInput = (nextOperator) => {
    const inputValue = Number(displayValue)

    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)

      setDisplayValue(result === 'Error' ? 'Error' : String(result))
      setFirstOperand(result === 'Error' ? null : result)
    }

    setWaitingForSecondOperand(true)
    setOperator(nextOperator)
  }

  const handleEquals = () => {
    if (!operator || firstOperand === null) {
      return
    }

    const inputValue = Number(displayValue)
    const result = calculate(firstOperand, inputValue, operator)

    setDisplayValue(result === 'Error' ? 'Error' : String(result))
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(true)
  }

  const handleClear = () => {
    setDisplayValue('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
  }

  const buttonClickHandler = (event) => {
    const value = event.currentTarget.dataset.value

    if (value === 'CLR') {
      handleClear()
      return
    }

    if (value === '=') {
      handleEquals()
      return
    }

    if (['+', '-', '×', '÷'].includes(value)) {
      handleOperatorInput(value)
      return
    }

    if (value === '.') {
      handleDecimalInput()
      return
    }

    handleNumberInput(Number(value))
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
