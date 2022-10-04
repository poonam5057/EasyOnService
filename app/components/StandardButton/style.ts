import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/slice';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';

export const useStyle = () => {
    const theme = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const styles = () =>
        StyleSheet.create({
            view: {
                backgroundColor: 'teal',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 15,
                flexDirection: 'row',
              //  width: '86%',
              //  marginHorizontal:20
            },
            icon: { paddingRight: 10 },
            text: {
                color: 'white',
                fontSize: FontSize.FONT_SIZE_M,
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
