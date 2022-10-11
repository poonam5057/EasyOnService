import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useStyle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, width, height, FontSize } from 'app/utils/constants';
import TextInputController from 'app/components/TextInputComponent';
import { onChangePassRequest } from 'app/store/slice/changePassSlice';

interface Props {}

const ChangePassword: React.FC<Props> = (props) => {
    const styles = useStyle();
    const dispatch = useDispatch();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPassVisible, setCurrentPassVisible] = useState(true);
    const [newPassVisible, setNewPassVisible] = useState(true);
    const [confirmPassVisible, setConfirmPassVisible] = useState(true);

    const onChangePassword = () => {
        const payload = {
            currentPassword,
            newPassword,
            confirmPassword,
        };
        if (currentPassword && newPassword && confirmPassword) {
            dispatch(onChangePassRequest(payload));
        } else {
            Alert.alert('Please Fill Data');
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginTop: 20 }}>
                <View style={styles.textInputView}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Current Password"
                        label="Current Password"
                        text={currentPassword}
                        secureTextEntry={currentPassVisible}
                        right={
                            <TextInput.Icon
                                name={currentPassVisible ? 'eye-off-outline' : 'eye-outline'}
                                onPress={() => setCurrentPassVisible(!currentPassVisible)}
                            />
                        }
                        onChangeText={(currentPassword: any) => {
                            setCurrentPassword(currentPassword);
                        }}
                        style={styles.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                    />
                </View>
                <View style={styles.textInputView}>
                    <TextInputController
                        mode="outlined"
                        placeholder="New Password"
                        label="New Password"
                        text={newPassword}
                        secureTextEntry={newPassVisible}
                        right={
                            <TextInput.Icon
                                name={newPassVisible ? 'eye-off-outline' : 'eye-outline'}
                                onPress={() => setNewPassVisible(!newPassVisible)}
                            />
                        }
                        onChangeText={(newPassword: any) => {
                            setNewPassword(newPassword);
                        }}
                        style={styles.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                    />
                </View>
                <View style={styles.textInputView}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        text={confirmPassword}
                        secureTextEntry={confirmPassVisible}
                        right={
                            <TextInput.Icon
                                name={confirmPassVisible ? 'eye-off-outline' : 'eye-outline'}
                                onPress={() => setConfirmPassVisible(!confirmPassVisible)}
                            />
                        }
                        onChangeText={(confirmPassword: any) => {
                            setConfirmPassword(confirmPassword);
                        }}
                        style={styles.textInputController}
                        activeUnderlineColor={COLORS.subTitle}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        width: '88%',
                        backgroundColor: COLORS.title,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 0,
                        marginBottom: 10,
                    }}
                    onPress={() => onChangePassword()}>
                    <Text
                        style={{
                            fontSize: FontSize.FONT_SIZE_M,
                            color: COLORS.white,
                            textAlign: 'center',
                            padding: 15,
                        }}>
                        Change Password
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

ChangePassword.defaultProps = {};

export default ChangePassword;
