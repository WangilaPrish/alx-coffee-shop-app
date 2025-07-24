import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';

const sizes = ['S', 'M', 'L'];

export default function ProductSizeSelector() {
    const [selectedSize, setSelectedSize] = useState('M');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Size</Text>
            <View style={styles.sizeRow}>
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[
                            styles.sizeBox,
                            selectedSize === size && styles.selected,
                        ]}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text
                            style={[
                                styles.sizeText,
                                selectedSize === size && styles.selectedText,
                            ]}
                        >
                            {size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(3),
        marginTop: RFPercentage(3),
    },
    label: {
        fontSize: RFPercentage(2.2),
        fontWeight: '600',
        marginBottom: RFPercentage(1.5),
        color: '#333',
    },
    sizeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sizeBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: RFPercentage(1.2),
        paddingHorizontal: RFPercentage(3),
        borderRadius: 10,
    },
    sizeText: {
        fontSize: RFPercentage(2),
        color: '#666',
    },
    selected: {
        backgroundColor: '#cc7a35',
        borderColor: '#cc7a35',
    },
    selectedText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
