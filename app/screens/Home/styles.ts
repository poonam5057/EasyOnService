import { StyleSheet, Platform } from 'react-native';
import { RootState } from 'app/store/slice';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { COLORS, SIZES, height, width } from '../../utils/constants';

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: 'white',
            },
            title: {
                fontWeight: 'bold',
                color: colors.primary,
            },
            productMainContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignSelf: 'center',
               // marginTop: 10,
            },
            productFlatListContainer: {
                width: '30%',
                marginHorizontal: 5,
                padding: 5,
                margin: 5,
                borderRadius:10,
                borderWidth:1,
                borderColor:'#d9cbca'
            },
            imageFlatlistStyle: {
                width: 55,
                height: 55,
                borderRadius: 5,
                justifyContent:'center',
                alignSelf:'center'
            },
            productTitle: {
                fontSize: 14,
                color: COLORS.title,
                fontWeight: 'bold',
                textAlign:'center'
            },
            appIntroSliderContainer: {
                flex: 1,
            },
            imageStyle: {
                width: '100%',
                height: 155,
            },
            activeDotStyle: {
                marginTop: '10%',
                backgroundColor: COLORS.title,
            },
            dotStyle: {
                marginTop: '10%',
                backgroundColor: COLORS.subTitle,
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
