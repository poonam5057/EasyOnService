import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const useStyle = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 2,
            },
            subContainer: {
                marginTop: '5%',
                alignItems: 'center',
            },
            login: {
                padding: 8,
            },
            labelStyle: {
                padding: 10,
                fontSize: 15,
                textAlign: 'right',
                marginHorizontal: 20,
                color: 'white',
            },
            textInputView: {
                padding: 5,
                margin: 5,
                marginHorizontal: 20,
            },
            textInputController: {
                overflow: 'hidden',
                color: 'white',
                backgroundColor: 'white',
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
