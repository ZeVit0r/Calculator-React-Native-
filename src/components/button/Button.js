import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native'

import style from './style';

export default props => {
  const styleButton = [style.button]
  if(props.double) styleButton.push(style.buttonDouble)
  if(props.triple) styleButton.push(style.buttonTriple)
  if(props.operation) styleButton.push(style.operationButton)

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style ={styleButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}