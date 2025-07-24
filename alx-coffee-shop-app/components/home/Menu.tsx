import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';

const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano', 'Espresso'];

type Props = {
    onSelectCategory: (category: string) => void;
};

export default function Menu({ onSelectCategory }: Props) {
    const [active, setActive] = useState('All Coffee');

    const handlePress = (category: string) => {
        setActive(category);
        onSelectCategory(category);
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.menuContainer}
        >
            {categories.map((cat, idx) => (
                <TouchableOpacity
                    key={idx}
                    onPress={() => handlePress(cat)}
                    style={[styles.item, active === cat && styles.activeItem]}
                >
                    <Text style={[styles.text, active === cat && styles.activeText]}>
                        {cat}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        paddingHorizontal: 16,
        paddingTop: 7,
    },
    item: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: RFPercentage(2),
        color: '#555',
    },
    activeItem: {
        backgroundColor: '#cc7a35',
    },
    activeText: {
        color: '#fff',
        fontWeight: '600',
    },
});
