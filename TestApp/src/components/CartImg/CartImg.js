import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

export const CartImg = ({urls, user:{name}}) => {
    const { full, regular } = urls;;
    return (
        <ViewGallery>
            <ImageGallery source={{ uri: regular ? regular : full }} />
            <Text style={{textAlign: 'center'}}>Author: {name}</Text>
        </ViewGallery>
    );
}
const ImageGallery = styled.Image`
    margin-bottom: 5px;
    width: 150px;
    height: 150px;
`; 

const ViewGallery = styled.View`
    margin: 5px; 
    max-width: 160px;
`; 