import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function BuyBar({ price }: { price: number }) {
    return (
        <View style={styles.container}>
            <div>
                <Text style={styles.text}>Price: </Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </div>

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
        padding: RFPercentage(4),
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: RFPercentage(2.2),
        fontWeight: '600',
        color: '#333',
        paddingRight: RFPercentage(1),
    },
    price: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: '#cc7a35',
    },
    button: {
        backgroundColor: '#cc7a35',
        paddingVertical: RFPercentage(1.4),
        paddingHorizontal: RFPercentage(4),
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: RFPercentage(2),
        fontWeight: '600',
    },
});
