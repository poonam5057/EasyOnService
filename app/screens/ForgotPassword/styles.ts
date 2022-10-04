import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { COLORS, SIZES, width, height } from '../../utils/constants';

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
            },
            textInputView: {
                padding: 5,
                margin: 5,
                marginHorizontal: 20,
                marginTop: 10,
            },
            textInputController: {
                overflow: 'hidden',
                color: 'white',
                backgroundColor: 'white',
            },
            labelStyle: {
                padding: 10,
                fontSize: 15,
                textAlign: 'right',
                marginHorizontal: 20,
                color: 'white',
            },
            subContainer: {
                marginTop: '5%',
                alignItems: 'center',
                marginBottom: 15,
            },
            topContainerText: {
                color: COLORS.white,
                fontSize: 16,
                textAlign: 'center',
                marginTop: '5%',
                marginHorizontal: '12%',
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
