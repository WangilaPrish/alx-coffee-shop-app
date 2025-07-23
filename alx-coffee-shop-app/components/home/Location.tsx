import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function Location() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Location</Text>
            <TouchableOpacity style={styles.locationContainer}>
                <Text style={styles.location}>Bilzen, Tanjungbalai</Text>
                <Feather name="chevron-down" size={18} color="#fff" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    label: {
        color: '#aaa',
        fontSize: RFPercentage(1.8),
        marginBottom: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: RFPercentage(2.2),
    },
    icon: {
        marginLeft: 6,
        marginTop: 2,
    },
});
