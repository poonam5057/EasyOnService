import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { RootState } from 'app/store/slice';
import { useSelector } from 'react-redux';
import { COLORS, SIZES, width, height } from '../../utils/constants';

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'white',
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
        });
    return React.useMemo(() => styles(), [isDark]);
};
