import { Image, StyleSheet, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ProductImage({ source }: { source: any }) {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(2),
        marginBottom: RFPercentage(2),
    },
    image: {
        width: '100%',
        height: RFPercentage(25),
        borderRadius: RFPercentage(2),
        resizeMode: 'cover',
    },
});
