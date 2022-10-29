import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useStyle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
import { onCategoryRequest } from 'app/store/slice/categoryGetSlice';
import NavigationService from 'app/navigation/NavigationService';
interface Props {}

const Category: React.FC<Props> = (props) => {
    const styles = useStyle();
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();
    const route = useRoute();
    const { Item } = route.params;
    const categoryData = useSelector((state: any) => state?.category);
    // console.log('categoryData ..@@.', categoryData);
    useEffect(() => {
        dispatch(onCategoryRequest(Item.id));
    }, []);

    useEffect(() => {
        if (categoryData) {
            setCategory(categoryData?.data?.categoriesData?.categories);
        }
        // console.log('inner useeffect', categoryData?.data?.categoriesData?.categories);
    }, [categoryData]);
    return (
        <View style={styles.container}>
            <FlatList
                data={category}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={
                                {
                                    /* flexDirection:'row' */
                                }
                            }>
                            <TouchableOpacity
                            activeOpacity={1
                            }
                                onPress={() =>
                                    NavigationService.navigate('SingleCategory', { Item: item })
                                }
                                style={{
                                    margin: 10,
                                    padding: 10,
                                    // borderWidth: 1,
                                    // borderColor: COLORS.borderLineColor,
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    marginHorizontal: 20,
                                }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: width / 5,
                                        height: width / 5,
                                        alignItems: 'flex-start',
                                    }}
                                    resizeMode={'contain'}
                                />
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginHorizontal: 35,
                                    }}>
                                    {item.categoriesName}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

Category.defaultProps = {};

export default Category;
