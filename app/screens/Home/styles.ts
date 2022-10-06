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
                width: '45%',
                marginHorizontal: 5,
                padding: 5,
            },
            imageFlatlistStyle: {
                width: 160,
                height: 130,
                borderRadius: 5,
            },
            productTitle: {
                fontSize: 16,
                color: COLORS.title,
                fontWeight: 'bold',
            },
            appIntroSliderContainer: {
                flex: 1,
            },
            imageStyle: {
                width: '100%',
                height: 300,
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
