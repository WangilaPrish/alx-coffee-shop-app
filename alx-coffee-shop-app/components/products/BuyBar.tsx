import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function BuyBar() {
    return (
        <View style={styles.container}>
            <View style={styles.priceSection}>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.price}>$ 4.53</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: RFPercentage(2),
        backgroundColor: '#fff',
        borderTopColor: '#eee',
        borderTopWidth: 1,
    },
    priceSection: {
        flex: 1,
    },
    label: {
        fontSize: RFPercentage(1.6),
        color: '#999',
    },
    price: {
        fontSize: RFPercentage(2.4),
        fontWeight: '700',
        color: '#cc7a35',
    },
    button: {
        backgroundColor: '#cc7a35',
        paddingVertical: RFPercentage(1.5),
        paddingHorizontal: RFPercentage(4),
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: RFPercentage(2),
    },
});
