import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const useStyle = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                marginTop: '50%',
                // justifyContent: 'center',
                // alignItems: 'center',
                // backgroundColor: isDark ? 'black' : 'white',
            },
            subContainer: {
                marginTop: '10%',
                // backgroundColor: colors.primary,
                // borderRadius: 20,
                alignItems: 'center',
                // borderWidth: 2,
                // padding: 20,
                // borderColor: isDark ? 'teal' : 'black',
            },

            login: {
                padding: 8,
            },
            forgot: {
                // marginTop: 5,
            },
            labelStyle: {
                padding: 10,
                fontSize: 15,
                color: isDark ? 'teal' : 'black',
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
