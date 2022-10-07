import React from 'react';
import { View, Text } from 'react-native';
import { useStyle } from './styles';
interface Props {}

const ChangePassword: React.FC<Props> = (props) => {
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}> change password</Text>
        </View>
    );
};

ChangePassword.defaultProps = {};

export default ChangePassword;
