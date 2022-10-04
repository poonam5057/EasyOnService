import StdButton from 'app/components/StandardButton/index';
import NavigationService from 'app/navigation/NavigationService';
import * as loginActions from 'app/store/actions/loginActions';

import React, { useEffect, useState } from 'react';
import {
    Animated,
    Easing,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import TextInputController from 'app/components/TextInputComponent';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
const Register: React.FC = () => {
    // const id = useSelector((state: RootState) => state.user.id);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyle();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const theme = useTheme();
    const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    const onForgot = () => NavigationService.navigate('ForgotPassword');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/laptop.png')}
                style={{ flex: 1, width: '100%', height: '100%' }}
                resizeMode={'cover'}>
                <View
                    style={{
                        //height: '65%',
                        width: '100%',
                        backgroundColor: 'rgba(52, 52, 52, 0.9)',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        // marginTop: 100,
                        //borderRadius: 10,
                        //paddingVertical: 15,
                    }}>
                    <ScrollView>
                        <View>
                            <Image
                                source={require('../../assets/images/logo.jpg')}
                                style={{
                                    width: 120,
                                    height: 120,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                }}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInputController
                                mode="flat"
                                placeholder="Name"
                                label="Name"
                                text={name}
                                onChangeText={(name) => {
                                    setEmail(name);
                                }}
                                style={styles.textInputController}
                                activeUnderlineColor={COLORS.subTitle}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInputController
                                mode="flat"
                                placeholder="Email"
                                label="Email"
                                text={email}
                                onChangeText={(email) => {
                                    setEmail(email);
                                }}
                                style={styles.textInputController}
                                activeUnderlineColor={COLORS.subTitle}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInputController
                                mode="flat"
                                placeholder="Password"
                                label="Password"
                                text={password}
                                onChangeText={(password) => {
                                    setPassword(password);
                                }}
                                style={styles.textInputController}
                                activeUnderlineColor={COLORS.subTitle}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInputController
                                mode="flat"
                                placeholder="Phone"
                                label="Phone"
                                text={phone}
                                onChangeText={(phone) => {
                                    setPhone(phone);
                                }}
                                style={styles.textInputController}
                                activeUnderlineColor={COLORS.subTitle}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInputController
                                mode="flat"
                                placeholder="Age"
                                label="Age"
                                text={age}
                                onChangeText={(age) => {
                                    setAge(age);
                                }}
                                style={styles.textInputController}
                                activeUnderlineColor={COLORS.subTitle}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInputController
                                mode="flat"
                                placeholder="Address"
                                label="Address"
                                text={address}
                                onChangeText={(address) => {
                                    setAge(address);
                                }}
                                style={styles.textInputController}
                                activeUnderlineColor={COLORS.subTitle}
                            />
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity
                                onPress={() => console.log('Register')}
                                style={{
                                    width: '85%',
                                    backgroundColor: 'grey',
                                    borderRadius: 10,
                                    marginBottom: 10,
                                }}>
                                <Text
                                    style={{
                                        fontSize: FontSize.FONT_SIZE_M,
                                        color: COLORS.white,
                                        textAlign: 'center',
                                        padding: 15,
                                    }}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Register;
