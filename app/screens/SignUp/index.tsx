import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';

interface Props {}

const SignUp: React.FC<Props> = (props) => {
    const styles = useStyle();
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('Hello! Im signup screen')}</Text>
        </View>
    );
};

SignUp.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default SignUp;
