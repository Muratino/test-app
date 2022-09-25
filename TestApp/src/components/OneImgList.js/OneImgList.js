import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

export const OneImgList = ({navigation}) => {
    const { oneImgArr } = useSelector((state) => state.fethAllLmg);
    const { description, urls:{full, regular}, likes, user } = oneImgArr;

    return (
        <View>
            <MyImage source={{ uri: regular ? regular : full  }}></MyImage>
            <MyView>
                <MyText>Author: {user.name}</MyText>
                <MyText>Likes: {likes ? likes : 0}</MyText>
            </MyView>
            <MyView>
                <MyDesc>Desc: {description ? description : 'No description'}</MyDesc>
                <MyButton onPress={() => navigation.navigate('List')}>
                    <MyText>Back</MyText>
                </MyButton>
            </MyView>
        </View>
    );
}

const MyImage = styled.Image`
    width: 100%;
    height: 300px;
    margin: 10px auto;
`;

const MyView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 10px 10px;
`;

const MyText = styled.Text`
    font-size: 15px;
`;

const MyDesc = styled.Text`
    font-size: 13px;
    max-width: 70%;
`;

const MyButton = styled.TouchableOpacity`
    padding: 8px 18px;
    border-radius: 5px;
    background-color: #14D100;
`;