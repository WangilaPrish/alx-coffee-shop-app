import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

interface CoffeeCardProps {
    name: string;
    description: string;
    price: string;
    image: any; // require('...') or { uri }
    onAdd?: () => void;
}

export default function CoffeeCard({
    name,
    description,
    price,
    image,
    onAdd,
}: CoffeeCardProps) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />

            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{description}</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>${price}</Text>
                    <TouchableOpacity style={styles.addButton} onPress={onAdd}>
                        <AntDesign name="plus" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: RFPercentage(2),
        marginVertical: RFPercentage(1.5),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        alignItems: 'center',
    },
    image: {
        width: RFPercentage(10),
        height: RFPercentage(10),
        borderRadius: 12,
        resizeMode: 'cover',
        marginRight: RFPercentage(2),
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: RFPercentage(2.3),
        fontWeight: 'bold',
        color: '#333',
    },
    desc: {
        fontSize: RFPercentage(1.8),
        color: '#777',
        marginVertical: RFPercentage(0.5),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: RFPercentage(2.2),
        fontWeight: '600',
        color: '#cc7a35',
    },
    addButton: {
        backgroundColor: '#cc7a35',
        padding: RFPercentage(1),
        borderRadius: 10,
    },
});
