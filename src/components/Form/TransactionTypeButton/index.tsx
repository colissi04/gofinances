import React from "react";
import {
  Container,
  Icon,
  Title
} from './styles';
import { TouchableOpacityProps } from "react-native";

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
} as const

interface Props extends TouchableOpacityProps{
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
} 

export function TransactionTypeButton({ type, title, isActive, ...rest }: Props){
  return(
    <Container 
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Icon 
        name={icons[type]}
        type={type}
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}
