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
    ScrollView,
    Alert,
} from 'react-native';
import { useTheme, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import TextInputController from 'app/components/TextInputComponent';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
import { onprofileRequest } from 'app/store/slice/profileGetSlice';

const Profile: React.FC = () => {
    // const id = useSelector((state: RootState) => state.userId.id);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyle();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(0);
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [passVisible, setPassVisible] = useState(true);
    const theme = useTheme();
    const userRegData = useSelector((state) => state.user);
    console.log('login first', userRegData.userId);
    // useEffect(() => {
    //     console.log('login second', userRegData);
    // }, [userRegData]);

    const editProfileData = () => {
        const payload = {
            name: name,
            email: email,
            password: password,
            phonenumber: parseInt(phone),
            age: parseInt(age),
            address: address,
        };
        if (name && email && password && phone && age && address) {
            // dispatch(registerActions.requestRegister(name, email, password, phone, age, address));
            dispatch(onprofileRequest(userRegData.userId));
            console.log('lavi', userRegData.userId);
            // Alert.alert('Alert', userRegData.data, [
            //     { text: 'OK', onPress: () => NavigationService.goBack() },
            // ]);
        } else {
            Alert.alert('Please fill all data');
        }
    };
    return (
        <View style={styles.container}>
            {/* <ImageBackground
                source={require('../../assets/images/laptop.png')}
                style={{ flex: 1, width: '100%', height: '100%' }}
                resizeMode={'cover'}> */}
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
                            source={require('../../assets/images/download.jpg')}
                            style={{
                                width: 110,
                                height: 110,
                                borderRadius: 110 / 2,
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
                            onChangeText={(name: any) => {
                                setName(name);
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
                    <View style={styles.textInputView}>
                        <TextInputController
                            mode="flat"
                            placeholder="Phone"
                            label="Phone"
                            text={phone}
                            onChangeText={(phone: number) => {
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
                            onChangeText={(age: number) => {
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
                            onChangeText={(address: any) => {
                                setAddress(address);
                            }}
                            style={styles.textInputController}
                            activeUnderlineColor={COLORS.subTitle}
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <TouchableOpacity
                            onPress={() => editProfileData()}
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
                                EditProfile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {/* </ImageBackground> */}
        </View>
    );
};

export default Profile;
