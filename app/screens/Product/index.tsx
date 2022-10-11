import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useStyle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { onProductRequest } from 'app/store/slice/productGetSlice';
interface Props {}

const Product: React.FC<Props> = (props) => {
    const styles = useStyle();
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const productData = useSelector((state: any) => state?.product);

    useEffect(() => {
        dispatch(onProductRequest());
    }, []);

    useEffect(() => {
        if (productData) {
            setProduct(productData?.data?.productData);
        }
    }, [productData]);

    return (
        <View style={styles.container}>
            <FlatList
                data={product}
                renderItem={({ item }) => {
                    return (
                        <View style={{ margin: 10, padding: 10, backgroundColor: 'red', borderRadius:10 }}>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: '90%', height: 60 }}
                            />
                            <Text>{item.productName}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};
        
Product.defaultProps = {};

export default Product;
