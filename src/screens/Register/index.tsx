import React, { useState } from "react";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from "./styles";

import { Input } from "@/src/components/Form/Input";
import { Button } from "@/src/components/Form/Button";
import { TransactionTypeButton } from "@/src/components/Form/TransactionTypeButton";

export function Register(){
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"  
          />
          <Input 
            placeholder="Preço"  
          />
          <TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Saída"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  )
}
