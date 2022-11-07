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
import { onProfileRequest } from 'app/store/slice/profileGetSlice';
import { onUserRequest } from 'app/store/slice/userGetSlice';
import { useFocusEffect } from '@react-navigation/native';

const Profile: React.FC = () => {
    // const id = useSelector((state: RootState) => state.userId.id);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const styles = useStyle();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //  const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(0);
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    //  const [passVisible, setPassVisible] = useState(true);
    const theme = useTheme();
    // get single user data
    const singleUser = useSelector((state) => state.singleUser);
    console.log('trtrtr>>>>>>>>>>>>>>>>>>>>>>>', singleUser);
    // get userid form login
    const userData = useSelector((state) => state.user);
    console.log('user id', userData.data.userId);
    // edit profile
    const ProfileData = useSelector((state) => state.profile);
    console.log('profile value', ProfileData);
    /*    useEffect(() => {
        dispatch(onUserRequest(userData.data.userId));
    }, []); */

    useFocusEffect(
        React.useCallback(() => {
            dispatch(onUserRequest(userData.data.userId));
        }, []),
    );

    useEffect(() => {
        if (singleUser) {
            setName(singleUser?.data?.postData?.name);
            setEmail(singleUser?.data?.postData?.email);
            setPhone(singleUser?.data?.postData?.phonenumber);
            setAge(singleUser?.data?.postData?.age);
            setAddress(singleUser?.data?.postData?.address);
        }
    }, [singleUser]);

    const onEditProfileData = () => {
        const payload = {
            name: name,
            email: email,
            phonenumber: phone,
            age: age,
            address: address,
            // id: userData.data.userId,
        };
        if (name && email && phone && age && address) {
            dispatch(onProfileRequest(singleUser?.data?.postData?.id, payload));
            // Alert.alert('Alert', ProfileData?.error?.message, [
            //     { text: 'OK', onPress: () => NavigationService.goBack() },
            // ]);
        } else {
            Alert.alert('Please fill all data');
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        borderBottomColor: COLORS.borderLineColor,
                        borderBottomWidth: 1,
                        paddingVertical: 20,
                    }}>
                    <Image
                        source={{
                            uri: 'https://www.pngitem.com/pimgs/m/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png',
                        }}
                        style={{
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: '8%',
                        }}
                        resizeMode={'cover'}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: COLORS.title,
                        }}>
                        Welcome user
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: COLORS.subTitle }}>
                        J&J Air Conditioning
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginHorizontal: 30,
                        marginTop: 20,
                    }}>
                    Profile Details
                </Text>
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
                        disabled
                    />
                </View>
                {/* <View style={styles.textInputView}>
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
                </View> */}
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
                        disabled
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
                        onPress={() => onEditProfileData()}
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
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
        </View>
    );
};

export default Profile;
