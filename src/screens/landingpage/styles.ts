import { StyleSheet} from 'react-native';
import { fontSz, hp, wp,rW, rH, rFS, deviceWidth, deviceHeight } from '../../utils';
import defaultColor from '../../theme/color';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    vector1Container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: hp(30),
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoImgCotainer: {
        position: 'absolute',
        top: hp(50),
        left: wp(10),
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateX: -wp(10) }],
    },
    logoImg: {
        width: fontSz(300),
        zIndex: 5,
    },

    vector2Container: {
        position: 'absolute',
        top: rH(69),
        left: 0,
        width: rW(100),
        height: rH(25),
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateX: -wp(1) }, { translateY: 40 }],

    },

    vectorImg: {
        width: '100%',
        height: deviceWidth * (9 / 9),
        zIndex: 1,
    },
    vector2Img: {
        width: rW(100),
        height: deviceHeight * (9 / 9),
        zIndex: 1,
        position: 'absolute',
        top: hp(0),
        left: 0,
        transform: [{ translateX: -wp(1) }, { translateY: -hp(380) }],
    },

    image: {
        resizeMode: 'contain', // Ensure the image scales correctly
    },

    versionContainer: {
        width: '100%', // Responsive width
        position: 'absolute',
        top: rH(89), // Center vertically relative to the screen
        left: wp(85),
        alignItems: 'center', // Center horizontally within its container
        transform: [
            { translateX: -wp(85) }, // Center horizontally
            { translateY: -hp(5) }, // Center vertically
        ],
    },

    versionText: {
        textAlign: 'center',
        color: defaultColor.textGray, // White text color
        fontSize: fontSz(12),
    },
});
