import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { OneImgList } from '../components/OneImgList.js/OneImgList';
import { fetchOneImg } from '../redux/Slice/fethData';

export const OneImg = ({ route, navigation }) => {
    const { statusOneImg } = useSelector((state) => state.fethAllLmg)
    const dispatch = useDispatch()
    const { id } = route.params;

    useEffect(() => {
        dispatch(fetchOneImg(id))
    }, []);

    const loading = statusOneImg === 'loading' ? <Text>Loading....</Text> : null;
    const content = statusOneImg === 'success' ? <OneImgList navigation={navigation} /> : null;
    const error = statusOneImg === 'error' ? <Text>Error....</Text> : null;

    return (
        <SafeAreaView>
            {loading}
            {content}
            {error}
        </SafeAreaView>
    );
}


