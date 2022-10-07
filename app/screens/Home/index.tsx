import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { Searchbar, Text } from 'react-native-paper';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES, width, height, FontSize } from '../../utils/constants';

const Home: React.FC = () => {
    const styles = useStyle();
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [serviceData, setServiceData] = useState([
        {
            id: 1,
            servicename: 'Ac Reparing',
            image: require('../../assets/images/ac1.jpeg'),
            status: 1,
        },
        {
            id: 2,
            servicename: 'Computer repairing',
            image: require('../../assets/images/com.jpeg'),
            status: 1,
        },
        {
            id: 3,
            servicename: 'Computer hardware',
            image: require('../../assets/images/hard.jpeg'),
            status: 1,
        },
        {
            id: 4,
            servicename: 'Computer parts',
            image: require('../../assets/images/repair.png'),
            status: 1,
        },
    ]);

    const [banner, setBanner] = useState([
        {
            id: 1,
            image: 'https://t4.ftcdn.net/jpg/03/34/40/47/360_F_334404760_f3yl8HLHQ2WEQwBeAtaRh6rIb5Tsi8LD.jpg',
        },
        {
            id: 2,
            image: 'https://media.istockphoto.com/photos/laptop-and-a-cup-of-coffee-on-office-desk-picture-id183263571?k=20&m=183263571&s=612x612&w=0&h=m8xTb2dT0NvQ4e0HZV128Gs5OPd4N_PSzIC14QCjkK8=',
        },
        {
            id: 3,
            image: 'https://wp.inews.co.uk/wp-content/uploads/2016/11/shutterstock_107197562.jpg?resize=640,360&strip=all&quality=90',
        },
    ]);
    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom:85}}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
                    value={searchQuery}
                    style={{ marginTop: 10, marginHorizontal: 15, borderRadius: 10 }}
                />
                <AppIntroSlider
                    data={banner}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.appIntroSliderContainer}>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode={'cover'}
                                    style={styles.imageStyle}
                                />
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
                    {serviceData.map((item: any) => {
                        return (
                            <View key={item.id} style={styles.productFlatListContainer}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => console.log('first')}>
                                    <Image
                                        source={item.image}
                                        style={styles.imageFlatlistStyle}
                                        resizeMode={'cover'}
                                    />
                                    <View style={{ marginTop: 10, marginHorizontal: 5 }}>
                                        <Text style={styles.productTitle}>{item.servicename}</Text>
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
