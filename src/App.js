/* Imports Reacts */
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

/* Imports de estilos */
import style from './style';

/* Imports de componentes */
import Button from './components/button/Button';
import Display from './components/display/display';

export default () => {
  const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0,
  }


  const [displayValue, setDisplayValue] = useState(initialState.displayValue)
  const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay)
  const [operation, setOperation] = useState(initialState.operation)
  const [values, setValues] = useState(initialState.values)
  const [current, setCurrent] = useState(initialState.current)

  addDigit = n => {
    
    
    const addDigitClearDisplay = displayValue === '0' || clearDisplay

    if(n == '.' && !addDigitClearDisplay && displayValue.includes('.')){
      return 
    }

    const currentValue = addDigitClearDisplay ? '' : displayValue
    const addDigitDisplayValue = currentValue + n
    setDisplayValue(addDigitDisplayValue)
    setClearDisplay(false)

    if( n !== '.'){
      const newValue = parseFloat(addDigitDisplayValue)
      const addDigitValues = [...values]
      addDigitValues[current] = newValue
      setValues(addDigitValues)
    }

  }

  clearMemory = () => {
    setDisplayValue(initialState.displayValue)
    setClearDisplay(initialState.clearDisplay)
    setOperation(initialState.operation)
    setValues(initialState.values)
    setCurrent(initialState.current)
  }

  funcSetOperation = oper => {
    if(current === 0){
      setOperation(oper)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = oper === '='
      const funcValues = [...values]
      try {
        funcValues[0] = eval(`${funcValues[0]} ${operation} ${funcValues[1]}`)
      } catch {
        funcValues[0] = values[0]
      }

      funcValues[1] = 0

      setDisplayValue(`${funcValues[0]}`)
      equals ? setOperation(null) : setOperation(oper)
      equals ? setCurrent(0) : setCurrent(1)
      /* setClearDisplay(!equals) */
      setClearDisplay(true)
      setValues(funcValues)

    }
  }

  return(
  <View style={style.container}>
    <Display value={displayValue}/>
    <View style={style.buttons}>
      <Button label='AC' triple onClick={clearMemory} />
      <Button label='/' operation onClick={funcSetOperation} />
      <Button label='7' onClick={addDigit} />
      <Button label='8' onClick={addDigit} />
      <Button label='9' onClick={addDigit} />
      <Button label='*' operation onClick={funcSetOperation} />
      <Button label='4' onClick={addDigit} />
      <Button label='5' onClick={addDigit} />
      <Button label='6' onClick={addDigit} />
      <Button label='-' operation onClick={funcSetOperation} />
      <Button label='1' onClick={addDigit} />
      <Button label='2' onClick={addDigit} />
      <Button label='3' onClick={addDigit} />
      <Button label='+' operation onClick={funcSetOperation} />
      <Button label='0' double onClick={addDigit} />
      <Button label='.' onClick={addDigit} />
      <Button label='=' operation onClick={funcSetOperation} />
    </View>
  </View>
  )

}