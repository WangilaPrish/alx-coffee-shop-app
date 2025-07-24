import { View, Text, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProductInfo() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Caffe Mocha</Text>
            <Text style={styles.subtitle}>Ice/Hot</Text>

            <View style={styles.ratingRow}>
                <FontAwesome name="star" size={16} color="#FFB800" />
                <Text style={styles.ratingText}> 4.8 </Text>
                <Text style={styles.ratingCount}>(230)</Text>
            </View>

            <View style={styles.tagsRow}>
                <Feather name="truck" size={20} color="#A47148" style={styles.tagIcon} />
                <MaterialCommunityIcons name="coffee" size={20} color="#A47148" style={styles.tagIcon} />
                <Feather name="gift" size={20} color="#A47148" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(2),
        marginBottom: RFPercentage(2),
    },
    title: {
        fontSize: RFPercentage(2.8),
        fontWeight: '700',
        color: '#333',
    },
    subtitle: {
        fontSize: RFPercentage(1.8),
        color: '#999',
        marginVertical: 4,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    ratingText: {
        fontSize: RFPercentage(2),
        fontWeight: '600',
        color: '#333',
    },
    ratingCount: {
        fontSize: RFPercentage(1.7),
        color: '#888',
    },
    tagsRow: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 12,
    },
    tagIcon: {
        marginRight: 8,
    },
});
