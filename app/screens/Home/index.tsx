import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Searchbar, Text } from 'react-native-paper';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
import { onBannerRequest } from 'app/store/slice/bannerGetSlice';
import { onServiceRequest } from 'app/store/slice/serviceGetSlice';
import NavigationService from 'app/navigation/NavigationService';

const Home: React.FC = () => {
    const styles = useStyle();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    // const [serviceData, setServiceData] = useState([
    //     {
    //         id: 1,
    //         servicename: 'Ac Reparing',
    //         image: require('../../assets/images/ac1.jpeg'),
    //         status: 1,
    //     },
    //     {
    //         id: 2,
    //         servicename: 'Computer repairing',
    //         image: require('../../assets/images/com.jpeg'),
    //         status: 1,
    //     },
    //     {
    //         id: 3,
    //         servicename: 'Computer hardware',
    //         image: require('../../assets/images/hard.jpeg'),
    //         status: 1,
    //     },
    //     {
    //         id: 4,
    //         servicename: 'Computer parts',
    //         image: require('../../assets/images/repair.png'),
    //         status: 1,
    //     },
    // ]);
    const [banner, setBanner] = useState([]);
    const [service, setService] = useState([]);
    const bannerData = useSelector((state: any) => state?.banner);
    const serviceData = useSelector((state: any) => state?.service);

    useEffect(() => {
        dispatch(onBannerRequest());
        dispatch(onServiceRequest());
    }, []);

    useEffect(() => {
        if (bannerData) {
            setBanner(bannerData.data?.BannerData);
        }
    }, [bannerData]);

    useEffect(() => {
        if (serviceData) {
            setService(serviceData?.data?.serviceData);
        }
    }, [serviceData]);

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 85 }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
                    value={searchQuery}
                    style={{ marginTop: 10, marginHorizontal: 15, borderRadius: 10 }}
                />
                <AppIntroSlider
                    data={banner || []}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.appIntroSliderContainer}>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode={'cover'}
                                    style={styles.imageStyle}
                                />
                                <Text
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        textAlign: 'center',
                                        left: 0,
                                        right: 0,
                                        marginTop: 20,
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: COLORS.primary,
                                    }}>
                                    {item.imageName}
                                </Text>
                            </View>
                        );
                    }}
                    activeDotStyle={styles.activeDotStyle}
                    dotStyle={styles.dotStyle}
                    showPrevButton={false}
                    showNextButton={false}
                    showDoneButton={false}
                    style={{ marginTop: 10, marginHorizontal: 10 }}
                />
                <Text style={{ margin: 10, padding: 10, fontSize: 18, fontWeight: 'bold' }}>
                    Services
                </Text>
                <View style={styles.productMainContainer}>
                    {!!service &&
                        service.map((item: any) => {
                            return (
                                <View key={item.id} style={styles.productFlatListContainer}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            NavigationService.navigate('Category', { Item: item })
                                        }>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.imageFlatlistStyle}
                                            resizeMode={'cover'}
                                        />
                                        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
                                            <Text style={styles.productTitle}>
                                                {item.servicename}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
