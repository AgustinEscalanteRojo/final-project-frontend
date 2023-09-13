import styled from 'styled-components'

const theme = {
  colors: {
    // Pastel
    pastelPink: '#FFD1DC',
    pastelBlue: '#AEC6CF',
    pastelGreen: '#B4D8B7',
    pastelLavender: '#E6E6FA',
    pastelPeach: '#FFDAB9',
    pastelMint: '#98FB98',
    pastelYellow: '#FAFAD2',
    pastelLemon: '#FFFACD',
    pastelLilac: '#D8BFD8',
    pastelCoral: '#FF6B6B',

    // Primary Colors
    blue25: '#F0F7FC',
    blue75: '#C2E0FC',
    blue125: '#94CAFA',
    blue175: '#66B4F9',
    blue225: '#388FF7',
    blue275: '#0A79F5',
    blue50: '#E3F2FD',
    blue200: '#64B5F6',
    blue400: '#1E88E5',
    blue600: '#1976D2',
    blue800: '#1565C0',
    blue100: '#83b0e7',
    blue300: '#5393de',
    blue500: '#5393DE',
    blue700: '#2F73D8',
    blue900: '#2C3E50',
    orang: '#ff4500',
    red300: '#EF5350',
    green100: '#B8E986',
    green500: '#2CB532',
    yellow200: '#FFD54F',
    purple400: '#9C27B0',
    orange300: '#FB8C00',

    // Secondary Colors
    pink200: '#F06292',
    teal300: '#4DB6AC',
    indigo500: '#3F51B5',
    amber600: '#FFB300',

    // Neutral Colors
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#F0F0F0',
    grey100: '#FAFAFA',
    grey200: '#E1E1E5',
    grey300: '#BCC6CC',
    grey400: '#A3A9B5',
    grey500: '#819098',
    grey600: '#757575',
    grey700: '#9E9E9E',
    grey800: '#111',
    grey900: '#5E7A79',
    grey: '#6E6E6E',
    greytitle: '#555',

    // Transparent Colors (RGBA)
    transparentWhite: 'rgba(255, 255, 255, 0.5)',
    transparentWhite2: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.8)',
    transparentBlue: 'rgba(23, 147, 192, 0.05)',
    transparentGrey: 'rgba(129, 144, 152, 0.1)',
    transparentRed: 'rgba(239, 83, 80, 0.8)',
    transparentGreen: 'rgba(44, 181, 50, 0.8)',
    transparentYellow: 'rgba(255, 213, 79, 0.8)',
    transparentPurple: 'rgba(156, 39, 176, 0.8)',
    transparentOrange: 'rgba(251, 140, 0, 0.8)',

    //Colors palette (codes: "hex" and "rba")
    teaGreen: '#CCD5AE', // rgb: 204, 213, 174
    beige: '#E9EDC9', // rgb: 233, 237, 201
    cornsilk: '#FEFAE0', // rgb: 254, 250, 224
    papayaWhip: '#FAEDCD', // rgb: 250, 237, 205
    buff: '#D4A373', //rgb: 212, 163, 115
    boldbuff: '#b37a42', //rgb: 179, 122, 66
    strongboldbuff: '#644527', //rgb: 100, 69, 39

    // Transparent Colors palette (RGBA)rgba: 250, 237, 205, 0.8'
    transparentpapayaWhip: 'rgba(250, 237, 205, 0.8)',
    transparentboldbuff: 'rgba(179, 122, 66, 0.8)',

    //Aditional colors palette (RGBA)rgba:
    softSky: '#edf8fd', // rgb: 237, 248, 253
    lagoonMist: '#03a9f4', // rgb: 3, 169, 244
    oceanicBlue: '#02679d', // rgb: 2, 103, 157
    oceanicTitleBlue: '#004d76',
    oceanicWriteBlue: '#083c57',
    oceanicShadow: '#05354f',
    aquaSky: '#58dcfd', // rgb: 88, 220, 253
  },
}

export const GeneralContainer = styled.div`
  overflow-x: hidden;
`

export default theme
