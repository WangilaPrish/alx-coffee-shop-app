import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

interface CoffeeCardProps {
    name: string;
    description: string;
    price: string;
    image: any;
    slug: string;
    onAdd?: () => void;
}

export default function CoffeeCard({
    name,
    description,
    price,
    image,
    onAdd,
    slug,
}: CoffeeCardProps) {

    const router = useRouter();
    return (

        <TouchableOpacity onPress={() => router.push(`/products/${slug}`)}>
            <View style={styles.card}>
                <Image source={image} style={styles.image} />

                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{description}</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>${price}</Text>
                    <TouchableOpacity style={styles.addButton} onPress={onAdd}>
                        <AntDesign name="plus" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View >
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: width * 0.44,
        borderRadius: 16,
        padding: RFPercentage(2),
        marginBottom: RFPercentage(2.5),
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: RFPercentage(14),
        borderRadius: 12,
        marginBottom: RFPercentage(1.5),
        resizeMode: 'cover',
    },
    name: {
        fontSize: RFPercentage(2.2),
        fontWeight: '600',
        color: '#333',
    },
    desc: {
        fontSize: RFPercentage(1.7),
        color: '#777',
        marginVertical: RFPercentage(0.5),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: RFPercentage(1),
    },
    price: {
        fontSize: RFPercentage(2),
        fontWeight: '600',
        color: '#cc7a35',
    },
    addButton: {
        backgroundColor: '#cc7a35',
        padding: RFPercentage(1),
        borderRadius: 10,
    },
});
