import { View, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ProductHeader from '../../components/product/ProductHeader';
import ProductImage from '../../components/product/ProductImage';
import ProductInfo from '../../components/product/ProductInfo';
import ProductDescription from '../../components/product/ProductDescription';
import ProductSizeSelector from '../../components/product/ProductSizeSelector';
import BuyBar from '../../components/product/BuyBar';

// Mock product database
const PRODUCTS: Record<string, { image: any; title: string; description: string; price: number }> = {
    cappuccino: {
        image: require('../../assets/images/cappuccino.png'),
        title: 'Cappuccino',
        description: 'Espresso with steamed milk foam.',
        price: 3.99,
    },
    latte: {
        image: require('../../assets/images/latte.png'),
        title: 'Latte',
        description: 'Smooth espresso with steamed milk.',
        price: 4.49,
    },
    americano: {
        image: require('../../assets/images/americano.png'),
        title: 'Americano',
        description: 'Espresso with hot water.',
        price: 2.99,
    },
};

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams();
    const product = PRODUCTS[id as string];

    if (!product) {
        return (
            <View style={styles.container}>
                <ProductHeader />
                <ScrollView contentContainerStyle={styles.content}>
                    <ProductImage source={require('../../assets/images/default-product.png')} />
                    <ProductInfo title="Not Found" price={0} />
                    <ProductDescription description="Product not found." />
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ProductHeader />
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <ProductImage source={product.image} />
                <ProductInfo title={product.title} price={product.price} />
                <ProductDescription description={product.description} />
                <ProductSizeSelector />
            </ScrollView>
            <BuyBar price={product.price} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingBottom: 100,
    },
});
