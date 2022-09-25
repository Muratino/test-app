import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

import { MainList } from '../components/MainList/MainList';
import { fetchAllImg } from '../redux/Slice/fethData';

export const GalleryScreen = ({ navigation }) => {
    const { statusArr } = useSelector((state) => state.fethAllLmg)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllImg());
    }, [])

    const loading = statusArr === 'loading' ? <Text>Loading....</Text> : null;
    const content = statusArr === 'success' ? <MainList navigation={navigation} /> : null;
    const error = statusArr === 'error' ? <Text>Error....</Text> : null;

    return (
        <SafeAreaView>
            <TextGallery>My gallery</TextGallery>
            {loading}
            {content}
            {error}
        </SafeAreaView>
    );
}

const TextGallery = styled.Text`
    text-align: center;
    font-size: 20px;
    margin: 10px 0;
`;

