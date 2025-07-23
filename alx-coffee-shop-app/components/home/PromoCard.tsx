import { View, Text, StyleSheet, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function PromoCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.promoTag}>Promo</Text>

            <View style={styles.content}>
                <Image
                    source={require('../../assets/images/Banner.png')}
                    style={styles.coffeeImage}
                />
                <Image
                    source={require('../../assets/images/Image.png')}
                    style={styles.heart1}
                />
                <Image
                    source={require('../../assets/images/Image.png')}
                    style={styles.heart2}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: RFPercentage(18),
        backgroundColor: '#A47148',
        borderRadius: 20,
        padding: RFPercentage(2),
        position: 'relative',
        justifyContent: 'center',
        marginTop: RFPercentage(3),
    },
    promoTag: {
        color: '#fff',
        backgroundColor: '#ddd',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        fontSize: RFPercentage(1.7),
        fontWeight: '600',
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coffeeImage: {
        width: RFPercentage(14),
        height: RFPercentage(14),
        resizeMode: 'contain',
    },
    heart1: {
        position: 'absolute',
        top: RFPercentage(2),
        left: RFPercentage(2),
        width: RFPercentage(3),
        height: RFPercentage(3),
        resizeMode: 'contain',
    },
    heart2: {
        position: 'absolute',
        bottom: RFPercentage(2),
        right: RFPercentage(2),
        width: RFPercentage(3),
        height: RFPercentage(3),
        resizeMode: 'contain',
    },
});
