import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useStyle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { onSingleCategoryRequest } from 'app/store/slice/singleCategorySlice';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {}

const SingleCategory: React.FC<Props> = (props) => {
    const styles = useStyle();
    const dispatch = useDispatch();
    const route = useRoute();
    const { Item } = route.params;
    console.log('siii item', Item.id);
    const [single, setSingle] = useState([]);
    const singleData = useSelector((state: any) => state?.singleCategory);

    useEffect(() => {
        dispatch(onSingleCategoryRequest(Item.id));
    }, []);

    useEffect(() => {
        if (singleData) {
            setSingle(singleData?.data?.categoriesData);
        }
    }, [singleData]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: single?.image }}
                    style={{ width: width / 1, height: height / 3 }}
                    resizeMode={'cover'}
                />
                <View
                    style={{
                        margin: 10,
                        padding: 10,
                        backgroundColor: 'white',
                        marginHorizontal: 30,
                        borderRadius: 10,
                        bottom: 35,
                    }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, marginTop: -5 }}>•</Text>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>
                            {single?.categoriesName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, marginTop: -5 }}>•</Text>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>{single?.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, marginTop: -5 }}>•</Text>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>{single?.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text
                            style={{
                                // marginHorizontal: 35,
                                fontSize: 18,
                                fontWeight: 'bold',
                                // bottom: 30,
                            }}>
                            Professional Person
                        </Text>
                    </View>
                    <View
                        style={
                            {
                                /*  margin: 10,
                        padding: 10,
                        // backgroundColor: 'white',
                        marginHorizontal: 30,
                        // borderRadius: 10,
                        // bottom: 30, */
                            }
                        }>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 20, marginTop: 2 }}>•</Text>
                            <Text style={{ fontSize: 16, marginTop: 6, marginLeft: 10 }}>
                                {single?.professional?.professional}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 20, marginTop: 2 }}>•</Text>
                            <Text style={{ fontSize: 16, marginTop: 5, marginLeft: 10 }}>
                                {single?.professional?.name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 20, marginTop: 2 }}>•</Text>
                            <Text style={{ fontSize: 16, marginTop: 5, marginLeft: 10 }}>
                                {single?.professional?.professional}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 20, marginTop: 2 }}>•</Text>
                            <Text style={{ fontSize: 16, marginTop: 5, marginLeft: 10 }}>
                                {single?.professional?.phonenumber}
                            </Text>
                        </View>
                    </View>
                </View>
                {/*  <Text style={{ marginHorizontal: 35, fontSize: 18, fontWeight: 'bold',bottom:30 }}>
                Professional Person
            </Text> */}
                {/* <View
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'white',
                    marginHorizontal: 30,
                    borderRadius: 10,
                    bottom: 30,
                }}>
                <Text style={{ fontSize: 16 }}>{single?.professional?.professional}</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>{single?.professional?.name}</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>
                    {single?.professional?.phonenumber}
                </Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>{single?.professional?.address}</Text>
            </View> */}
            </ScrollView>
        </View>
    );
};

SingleCategory.defaultProps = {};

export default SingleCategory;
