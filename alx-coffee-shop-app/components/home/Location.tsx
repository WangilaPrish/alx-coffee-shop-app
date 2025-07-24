import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useState } from 'react';

export default function Location() {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Delivery Location</Text>

            {/* Selected Location */}
            <TouchableOpacity style={styles.locationContainer}>
                <Text style={styles.location}>Bilzen, Tanjungbalai</Text>
                <Feather name="chevron-down" size={18} color="#333" style={styles.icon} />
            </TouchableOpacity>

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


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        color: '#333',
        backgroundColor: '#111111',
        height: RFPercentage(32),
    },
    label: {
        color: 'white',
        fontSize: RFPercentage(1.8),
        marginTop: RFPercentage(5),
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#313131',
        borderRadius: 12,
        width: '90%',
        paddingHorizontal: RFPercentage(1.6),
        height: RFPercentage(5.7),
        marginVertical: RFPercentage(6),
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFPercentage(2.2),
    },
    icon: {
        marginLeft: 6,
        marginTop: 2,
    },
});
