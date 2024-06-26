import React from 'react';
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';
import { HighlightCard } from '@/src/components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '@/src/components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title:'Desenvolvimento do Site',
            amount:'R$ 12.000,00',
            category:{
                name:'Vendas',
                icon: 'dollar-sign'
            },
            date:'13/04/2024'
        },
        {
            id: '2',
            type: 'negative',
            title:'Haburgueria Pizzy',
            amount:'R$ 59,00',
            category:{
                name:'Alimentação',
                icon: 'coffee'
            },
            date:'12/04/2024'
        },
        {
            id: '3',
            type: 'negative',
            title:'Aluguel do Apartamento',
            amount:'R$ 1.200,00',
            category:{
                name:'Casa',
                icon: 'shopping-bag'
            },
            date:'11/04/2024'
        }
    ];

    return(
        <Container>

            <Header>

                <UserWrapper>

                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/105324740?v=4' }}/>

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Rodrigo</UserName>
                        </User>

                    </UserInfo>
                
                    <Icon name="power" />
                 </UserWrapper>

            </Header>

            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última entrada dia 03 de abril"
                />
                <HighlightCard
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    keyExtractor={(item : DataListProps) => item.id}
                    renderItem={({ item } : { item: DataListProps }) => <TransactionCard data={item}/> }
                />

            </Transactions>

        </Container>
    )
}
