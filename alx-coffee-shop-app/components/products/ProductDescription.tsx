import { View, Text, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ProductDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Description</Text>
            <Text style={styles.body}>
                A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk the fo..{' '}
                <Text style={styles.readMore}>Read More</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(2),
        marginTop: RFPercentage(2),
    },
    heading: {
        fontSize: RFPercentage(2.2),
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    body: {
        fontSize: RFPercentage(1.9),
        color: '#999',
        lineHeight: RFPercentage(3),
    },
    readMore: {
        color: '#cc7a35',
        fontWeight: '500',
    },
});
