import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

import { fetchAllImg } from '../../redux/Slice/fethData';
import { CartImg } from '../CartImg/CartImg';

export const MainList = ({ navigation }) => {
    const { arr } = useSelector((state) => state.fethAllLmg);
    
    // const footerButton = () => {
    //     return (
    //         <ButtonGallery onPress={() => fetchAllImg()}>
    //             <Text style={{ fontSize: 15, textAlign: 'center' }}>Load more</Text>
    //         </ButtonGallery>
    //     )
    // }

    return (
        <ViewGallery>
            <FlatList
                style={{ height: '90%' }}
                data={arr}
                numColumns={2}
                // ListFooterComponent={() => footerButton(offset)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('OneImg', { id: item.id })}>
                        <CartImg key={item.id} {...item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </ViewGallery>
    );
}



const ViewGallery = styled.View`
    margin: 0 auto;
`;

const ButtonGallery = styled.TouchableOpacity`
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #14D100;
`;