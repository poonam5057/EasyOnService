import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, width, height, FontSize } from 'app/utils/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { onSubmitRequest } from 'app/store/slice/projectEstimateSlice';
import TextInputController from 'app/components/TextInputComponent';


interface Props {}

const projectEstimate: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [message, setMessage] = useState();

    const submit = () => {
        const payload = {
            name: name,
            city: city,
            email: email,
            phonenumber: phonenumber,
            message: message,
        };
        if (name && city && email && phonenumber && message) {
            dispatch(onSubmitRequest(payload));
        } else {
            Alert.alert('Please Enter Valid Details');
        }
    };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ margin: 10, padding: 5 }}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Please Enter Your Full Name"
                        label="Name"
                        text={name}
                        onChangeText={(name: any) => {
                            setName(name);
                        }}
                        style={{ overflow: 'hidden', color: 'white', backgroundColor: 'white' }}
                        activeUnderlineColor={COLORS.subTitle}
                        left={<TextInput.Icon name="account" />}
                    />
                </View>
                <View style={{ margin: 10, padding: 5 }}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Please Enter Your City"
                        label="City"
                        text={city}
                        onChangeText={(city: any) => {
                            setCity(city);
                        }}
                        style={{ overflow: 'hidden', color: 'white', backgroundColor: 'white' }}
                        activeUnderlineColor={COLORS.subTitle}
                        left={<TextInput.Icon name="google-maps" />}
                    />
                </View>
                <View style={{ margin: 10, padding: 5 }}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Please Enter Your Email"
                        label="Email"
                        text={email}
                        onChangeText={(email: any) => {
                            setEmail(email);
                        }}
                        style={{ overflow: 'hidden', color: 'white', backgroundColor: 'white' }}
                        activeUnderlineColor={COLORS.subTitle}
                        left={<TextInput.Icon name="email" />}
                    />
                </View>
                <View style={{ margin: 10, padding: 5 }}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Please Enter Your Phone Number"
                        label="Phone Number"
                        text={phonenumber}
                        onChangeText={(phonenumber: any) => {
                            setPhonenumber(phonenumber);
                        }}
                        style={{ overflow: 'hidden', color: 'white', backgroundColor: 'white' }}
                        activeUnderlineColor={COLORS.subTitle}
                        left={<TextInput.Icon name="cellphone" />}
                    />
                </View>
                <View style={{ margin: 10, padding: 10 }}>
                    <TextInputController
                        mode="outlined"
                        placeholder="Please Enter Your Requirement"
                        label="Message"
                        text={message}
                        onChangeText={(message: any) => {
                            setMessage(message);
                        }}
                        style={{ overflow: 'hidden', color: 'white', backgroundColor: 'white' }}
                        activeUnderlineColor={COLORS.subTitle}
                        left={<TextInput.Icon name="android-messages" />}
                    />
                </View>
                <View style={{ marginTop: '40%' }}>
                    <TouchableOpacity
                        style={{
                            width: '88%',
                            backgroundColor: COLORS.title,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            position: 'absolute',
                            bottom: 0,
                            // marginBottom: 5,
                        }}
                        onPress={() => submit()}>
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
            </ScrollView>
        </View>
    );
};

projectEstimate.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default projectEstimate;
