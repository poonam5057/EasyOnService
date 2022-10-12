import StdButton from 'app/components/StandardButton/index';
import NavigationService from 'app/navigation/NavigationService';
import { onLoginRequest } from 'app/store/slice/userSlice';
import React, { useEffect, useState } from 'react';
import {
    Animated,
    Easing,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image,
    Alert,
} from 'react-native';
import { useTheme, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputController from 'app/components/TextInputComponent';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';

const Login: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyle();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passVisible, setPassVisible] = useState(true);

    const theme = useTheme();

    const onLogin = () => {
        const payload = {
            email: email,
            password: password,
        };
        if (email && password) {
            dispatch(onLoginRequest(payload));
        } else {
            Alert.alert('Please enter email and password');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/laptop.png')}
                style={{ flex: 1, width: '100%', height: '100%' }}
                resizeMode={'cover'}>
                <View
                    style={{
                        //height: '65%',
                        width: '95%',
                        backgroundColor: 'rgba(52, 52, 52, 0.9)',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        // marginTop: 100,
                        borderRadius: 10,
                        paddingVertical: 15,
                        marginTop: width / 4,
                    }}>
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
                            placeholder="Email"
                            label="Email"
                            text={email}
                            onChangeText={(email: any) => {
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
                            secureTextEntry={passVisible}
                            right={
                                <TextInput.Icon
                                    name={passVisible ? 'eye-off-outline' : 'eye-outline'}
                                    onPress={() => setPassVisible(!passVisible)}
                                />
                            }
                            onChangeText={(password: any) => {
                                setPassword(password);
                            }}
                            style={styles.textInputController}
                            activeUnderlineColor={COLORS.subTitle}
                        />
                    </View>
                    <Text
                        style={styles.labelStyle}
                        onPress={() => NavigationService.navigate('ForgotPassword')}>
                        {t('Forgot Password')}
                    </Text>
                    <View style={styles.subContainer}>
                        {/* <StdButton
                    title={t('Login')}
                    onPress={() => console.log('Login')}
                    //onPress={onLogin}
                    icon="login"
                    iconColor={theme.colors.background === 'white' ? 'white' : 'black'}
                /> */}
                        <TouchableOpacity
                            style={{
                                width: '85%',
                                backgroundColor: 'grey',
                                // height: 50,
                                borderRadius: 10,
                            }}
                            onPress={() => onLogin()}>
                            <Text
                                style={{
                                    fontSize: FontSize.FONT_SIZE_M,
                                    color: COLORS.white,
                                    textAlign: 'center',
                                    padding: 15,
                                }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text
                                style={{
                                    fontSize: FontSize.FONT_SIZE_M,
                                    color: COLORS.white,
                                    // textAlign: 'center',
                                    //padding: 15,
                                }}>
                                New Account ?
                            </Text>
                            <Text
                                onPress={() => NavigationService.navigate('Register')}
                                style={{
                                    fontSize: FontSize.FONT_SIZE_M,
                                    color: COLORS.primary,
                                    //  textAlign: 'center',
                                    marginLeft: 5,
                                }}>
                                Register
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;
