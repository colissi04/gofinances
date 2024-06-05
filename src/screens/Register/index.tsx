import React, { useState } from "react";

import { Modal } from "react-native";

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
import { CategorySelectButton } from "@/src/components/Form/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

export function Register(){
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  };

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  };

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  };

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
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}
