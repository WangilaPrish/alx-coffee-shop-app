import { Image, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ProductImage({ source }: { source: any }) {
    return (
        <Image source={source} style={styles.image} resizeMode="cover" />
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: RFPercentage(35),
        borderRadius: RFPercentage(2),
    },
});
