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
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputController from 'app/components/TextInputComponent';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
const ForgotPassword: React.FC = () => {
    // const id = useSelector((state: RootState) => state.user.id);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyle();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    const onForgot = () => NavigationService.navigate('ForgotPassword');
    // const rotation = new Animated.Value(0);
    // const rotationValue = rotation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['0deg', '360deg'],
    // });
    // const opacityValue = new Animated.Value(0);

    // useEffect(() => {
    //     Animated.timing(rotation, {
    //         toValue: 1,
    //         duration: 5000,
    //         easing: Easing.bounce,

    //         useNativeDriver: true,
    //     }).start();

    //     setTimeout(() => {
    //         Animated.spring(opacityValue, {
    //             toValue: 1,
    //             stiffness: 20,
    //             useNativeDriver: true,
    //         }).start();
    //     }, 5000);
    // }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/repair.png')}
                style={{ flex: 1, width: '100%', height: '100%', opacity:0.8 }}
                resizeMode={'cover'}>
                <View
                    style={{
                        width: '95%',
                        backgroundColor: 'rgba(52, 52, 52, 0.9)',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 10,
                        paddingVertical: 15,
                        marginTop: width / 2.2,
                    }}>
                    <View>
                        <Text style={styles.topContainerText}>
                            Please enter your Email so we can help you recover your password.
                        </Text>
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
                            }}>
                            <Text
                                style={{
                                    fontSize: FontSize.FONT_SIZE_M,
                                    color: COLORS.white,
                                    textAlign: 'center',
                                    padding: 15,
                                }}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ForgotPassword;
