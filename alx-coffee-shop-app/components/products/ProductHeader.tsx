import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ProductHeader() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.title}>Detail</Text>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: RFPercentage(2),
        backgroundColor: '#fff',
    },
    title: {
        fontSize: RFPercentage(2.4),
        fontWeight: '600',
        color: '#333',
    },
});
