import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import vector1 from '../../assets/images/Vector1.png'; // Adjust the path as necessary
import landimg from '../../assets/images/landimag.png';
import vector2 from '../../assets/images/Vector2.png'; // Adjust the path as necessary
import { styles } from './styles';

type LandingpageProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Landing'>;
};


export const Landingpage: React.FC<LandingpageProps> = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Onboarding');
        }, 3000); // Navigate after 3 seconds

        return () => clearTimeout(timer); // Clean up the timer
    }, [navigation]);


    return (
        <View style={styles.container}>
            <View style={styles.vector1Container}>
                <Image source={vector1} style={[styles.image, styles.vectorImg]} />
            </View>
            <View style={styles.logoImgCotainer}>
                <Image source={landimg} style={[styles.image, styles.logoImg, { zIndex: 1, }]} />
            </View>

            <View style={styles.vector2Container}>

                <Image source={vector2} style={[styles.image, styles.vector2Img]} />
            </View>

            <View style={styles.versionContainer}>
                <Text style={styles.versionText}>App Version 12.1.2</Text>
            </View>

        </View>
    );
};

