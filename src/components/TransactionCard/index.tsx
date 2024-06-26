import React from 'react';

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    CardDate
} from './styles'

interface CategoryProps {
    name: string;
    icon: string;
}

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
}

interface DataProps {
    data: TransactionCardProps;
}

export function TransactionCard({ data }: DataProps){
    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                { data.type === "negative"  ? '- ' + data.amount : data.amount }
            </Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <CardDate>{data.date}</CardDate>
            </Footer>
        </Container>
    )
}
