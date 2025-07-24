import { View, Text, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ProductDescription({ description }: { description: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Description</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: RFPercentage(2),
        paddingHorizontal: RFPercentage(3),
    },
    heading: {
        fontSize: RFPercentage(2.2),
        fontWeight: '600',
        marginBottom: RFPercentage(1),
        color: '#333',
    },
    text: {
        fontSize: RFPercentage(1.9),
        color: '#555',
        lineHeight: RFPercentage(2.6),
    },
});
