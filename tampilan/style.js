import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    appStyle: {
        backgroundColor: 'aliceblue',
        height: Dimensions.get('window').height
    },
    toolbarStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 5
    },
    toolbarItemLeftContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    toolbarItemRightContainer: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    toolbarItemBackArrow: {
        
    },
    toolbarText: {
        fontWeight: 'bold',
        marginStart: 20,
        fontSize: 18,
        color: 'black'
    },
    circleToolbar: {
        padding: 8,
        borderRadius: 60,
        backgroundColor: 'white'
    },
    kategoryView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'aliceblue',
        marginTop: 30,
        height: 50
    },
    itemKategori: {
        padding: 10,
        backgroundColor: '#fff',
        marginStart: 10,
        marginEnd: 10,
        height: 38,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: 'gray',
        color: 'black',
    },
    productView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingStart: 10,
        paddingRight: 10,
        marginBottom: 30
    },
    itemProduct: {
        flex: 2,
        flexBasis: '50%',
        padding: 5
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowRadius: 3,
        shadowOffset: {width: -2, height: -2},
        shadowOpacity: 0.2,
        shadowColor: '#171717',
        elevation: 1,
        position: 'relative',
        minHeight: 180
    },
    iconFav: {
        position: 'absolute',
        right: 0,
        margin: 5,
    },
    textOutOfStock: {
        position: 'absolute',
        left: 0,
        paddingTop: 4,
        paddingBottom: 4,
        paddingStart: 8,
        paddingRight: 8,
        margin: 5,
        backgroundColor: 'red',
        borderRadius: 5,
        fontSize: 10,
        fontWeight: 'bold',
        zIndex: 1,
        color: 'white'
    },
    textPrice: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    textPriceOff: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'gray'
    }
});

export default styles;