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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: RFPercentage(18),
        backgroundColor: '#A47148',
        borderRadius: 20,
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: -RFPercentage(9), // 👈 pull up into the location box
        zIndex: 10,
        alignSelf: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
    }

    ,
    promoTag: {
        color: '#fff',
        backgroundColor: '#ddd',
        position: 'absolute',
        top: RFPercentage(1.5),
        paddingHorizontal: RFPercentage(2),
        marginLeft: RFPercentage(2),
        paddingVertical: 4,
        borderRadius: 8,
        fontSize: RFPercentage(1.7),
        fontWeight: '600',
        zIndex: 2,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coffeeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
