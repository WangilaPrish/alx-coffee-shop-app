import { View, Text, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ProductInfo({ title, price }: { title: string; price: number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(3),
        paddingTop: RFPercentage(2),
    },
    title: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: RFPercentage(2.5),
        fontWeight: '600',
        color: '#cc7a35',
        marginTop: RFPercentage(0.5),
    },
});
