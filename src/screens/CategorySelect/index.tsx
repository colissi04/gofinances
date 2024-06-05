import React from "react";

import { Button } from "@/src/components/Form/Button";

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Footer
} from "./styles";
import { FlatList } from "react-native";
import { categories } from "@/src/utils/categories";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
  ...rest
}: Props){ 
  function handleCategorySelect(category: Category){
    setCategory(category)
  }

  return(
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList 
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            {...rest}
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />

      <Footer>
        <Button 
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
};
