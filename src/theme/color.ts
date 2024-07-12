interface ColorScheme {
    bgColor: string;
    btnlpurple: string;
    cardColor: string;
    gray: string;
    textGray: string;
    textPurple: string;
    textPurpleLight: string;
    textRed: string;
    amazonBackground: string;
}

const defaultColor: ColorScheme = {
    bgColor: '#ffff',
    btnlpurple: '#8E7AB5',
    cardColor: '#3F3D56',
    gray: '#454545',
    textGray: '#767676',
    textPurple: '#694C9F',
    textPurpleLight: '#8E7AB5', // Renamed to avoid duplicate keys
    textRed: '#EB6055',
    amazonBackground: '#FFB8B8', // Corrected the spelling from 'amasonBackgroud' to 'amazonBackground'
};

export default defaultColor;
