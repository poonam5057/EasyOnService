import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Searchbar, Text } from 'react-native-paper';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';
import { onBannerRequest } from 'app/store/slice/bannerGetSlice';
import { onServiceRequest } from 'app/store/slice/serviceGetSlice';
import { onBestOfferRequest } from 'app/store/slice/bestOfferGetSlice';
import NavigationService from 'app/navigation/NavigationService';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Home: React.FC = () => {
    const styles = useStyle();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [banner, setBanner] = useState([]);
    const [service, setService] = useState([]);
    const [bestData, setBestData] = useState([]);
    const bannerData = useSelector((state: any) => state?.banner);
    const serviceData = useSelector((state: any) => state?.service);
    const bestOfferData = useSelector((state: any) => state?.bestOffer);
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    useEffect(() => {
        dispatch(onBannerRequest());
        dispatch(onServiceRequest());
        dispatch(onBestOfferRequest());
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

    useEffect(() => {
        if (bestOfferData) {
            setBestData(bestOfferData?.data?.bestoffersData);
        }
    }, [bestOfferData]);

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
                                    {/* {item.imageName} */}
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

                <Text style={{ margin: 10, padding: 10, fontSize: 18, fontWeight: 'bold' }}>
                    Best Offers
                </Text>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={bestData}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    backgroundColor: 'white',
                                    borderRadius: 8,
                                    height:210,
                                    width: Math.round(Dimensions.get('window').width - 30 * 0.8),
                                    // paddingBottom: 40,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.29,
                                    shadowRadius: 4.65,
                                }}
                                key={index}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        /* width: Math.round(
                                            Math.round(Dimensions.get('window').width - 30 * 0.8),
                                        ), */
                                        width:'100%',
                                        height: 215,
                                        bottom:2
                                    }}
                                    resizeMode={'contain'}
                                />
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        paddingLeft: 20,
                                        paddingTop: 20,
                                        bottom: 80,

                                    }}>
                                    {item.bestoffersName}
                                </Text>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 18,
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                        bottom: 80
                                    }}>
                                    {item.description}
                                </Text>
                            </View>
                        );
                    }}
                    sliderWidth={Dimensions.get('window').width + 80}
                    itemWidth={Math.round(Dimensions.get('window').width + 80 * 0.7)}
                    onSnapToItem={(index: React.SetStateAction<number>) => setIndex(index)}
                    useScrollView={true}
                />
                <Pagination
                    dotsLength={bestData?.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)',
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </ScrollView>
        </View>
    );
};

export default Home;
