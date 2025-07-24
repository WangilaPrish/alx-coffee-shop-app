import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const sizes = ['S', 'M', 'L'];

export default function ProductSizeSelector() {
    const [selected, setSelected] = useState('M');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Size</Text>
            <View style={styles.optionsRow}>
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[styles.option, selected === size && styles.selected]}
                        onPress={() => setSelected(size)}
                    >
                        <Text style={[styles.optionText, selected === size && styles.selectedText]}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(2),
        marginTop: RFPercentage(2),
    },
    label: {
        fontSize: RFPercentage(2),
        fontWeight: '600',
        color: '#333',
        marginBottom: RFPercentage(1.2),
    },
    optionsRow: {
        flexDirection: 'row',
        gap: RFPercentage(2),
    },
    option: {
        paddingVertical: RFPercentage(1.3),
        paddingHorizontal: RFPercentage(3.5),
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
    },
    selected: {
        backgroundColor: '#fff',
        borderColor: '#cc7a35',
        borderWidth: 1,
    },
    optionText: {
        fontSize: RFPercentage(2),
        color: '#666',
        fontWeight: '500',
    },
    selectedText: {
        color: '#cc7a35',
        fontWeight: '600',
    },
});
