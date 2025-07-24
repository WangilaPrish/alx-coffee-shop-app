import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useState } from 'react';

export default function Location() {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Delivery Location</Text>

            {/* Search Input */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={18} color="#aaa" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search location..."
                    placeholderTextColor="#aaa"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                />
            </View>

            {/* Selected Location */}
            <TouchableOpacity style={styles.locationContainer}>
                <Text style={styles.location}>Bilzen, Tanjungbalai</Text>
                <Feather name="chevron-down" size={18} color="#333" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: RFPercentage(6),
        color: '#333',
        backgroundColor: '#fff',
        height: RFPercentage(16),
    },
    label: {
        color: '#888',
        fontSize: RFPercentage(1.8),
        marginBottom: RFPercentage(1),
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        paddingHorizontal: RFPercentage(1.5),
        marginBottom: RFPercentage(1.5),
    },
    searchIcon: {
        marginRight: RFPercentage(1),
    },
    input: {
        flex: 1,
        fontSize: RFPercentage(2),
        paddingVertical: RFPercentage(1),
        color: '#333',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: RFPercentage(2.2),
    },
    icon: {
        marginLeft: 6,
        marginTop: 2,
    },
});
