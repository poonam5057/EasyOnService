import StdButton from 'app/components/StandardButton/index';
import NavigationService from 'app/navigation/NavigationService';
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
import { useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputController from 'app/components/TextInputComponent';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
import { onForgotRequest } from 'app/store/slice/forgotPassSlice';

const ForgotPassword: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyle();
    const [email, setEmail] = useState('');
    const theme = useTheme();
    const forgotData = useSelector((state) => state.forgot);

    const onForgotPassword = () => {
        const payload = { email: email };
        if (email) {
            dispatch(onForgotRequest(payload));
            Alert.alert('Alert', forgotData.message, [
                { text: 'OK', onPress: () => NavigationService.goBack() },
            ]);
        } else {
            Alert.alert('Please enter email');
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/repair.png')}
                style={{ flex: 1, width: '100%', height: '100%', opacity: 0.8 }}
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
                            onChangeText={(email: any) => {
                                setEmail(email);
                            }}
                            style={styles.textInputController}
                            activeUnderlineColor={COLORS.subTitle}
                        />
                    </View>

                    <View style={styles.subContainer}>
                        <TouchableOpacity
                            onPress={() => onForgotPassword()}
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
