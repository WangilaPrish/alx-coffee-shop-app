import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import ProductHeader from '../../components/products/ProductHeader';
import ProductImage from '../../components/products/ProductImage';
import ProductInfo from '../../components/products/ProductInfo';
import ProductDescription from '../../components/products/ProductDescription';
import ProductSizeSelector from '../../components/products/ProductSizeSelector';
import BuyBar from '../../components/products/BuyBar';

// Mock product database
const PRODUCTS: Record<
    string,
    { image: any; title: string; description: string; price: number; slug: string }
> = {
    cappuccino: {
        image: require('../../assets/images/cappuccino.png'),
        title: 'Cappuccino',
        description: 'Rich espresso with steamed milk and foam. Perfect for a morning boost. ',
        price: 3.99,
        slug: 'cappuccino',
    },
    latte: {
        image: require('../../assets/images/latte.png'),
        title: 'Latte',
        description: 'Smooth espresso with steamed milk. A classic favorite. ',
        price: 4.49,
        slug: 'latte',
    },
    americano: {
        image: require('../../assets/images/americano.png'),
        title: 'Americano',
        description: 'Espresso with hot water. A simple yet satisfying drink.',
        price: 2.99,
        slug: 'americano',
    },
    mocha: {
        image: require('../../assets/images/mocha.png'),
        title: 'Mocha',
        description: 'Espresso with chocolate and steamed milk.',
        price: 4.99,
        slug: 'mocha',
    },
};

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const product = id ? PRODUCTS[id.toLowerCase()] : null;

    const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M');

    const getAdjustedPrice = () => {
        if (!product) return 0;
        const base = product.price;
        const increment = selectedSize === 'M' ? 2 : selectedSize === 'L' ? 4 : 0;
        return parseFloat((base + increment).toFixed(2));
    };

    if (!product) {
        return (
            <View style={styles.container}>
                <ProductHeader />
                <ScrollView contentContainerStyle={styles.content}>
                    <View style={styles.fallbackImage}>
                        <Text style={styles.notFoundText}>Product not found.</Text>
                    </View>
                    <ProductInfo title="Unknown Product" price={0} />
                    <ProductDescription description="We couldn't find the product you're looking for." />
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ProductHeader />
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <ProductImage source={product.image} />
                <ProductInfo title={product.title} price={getAdjustedPrice()} />
                <ProductDescription description={product.description} />
                <ProductSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            </ScrollView>
            <BuyBar price={getAdjustedPrice()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        paddingTop: 35,
    },
    content: {
        paddingBottom: 100,
        paddingHorizontal: 20,
        gap: 16,
    },
    fallbackImage: {
        height: 220,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#888',
    },
});
