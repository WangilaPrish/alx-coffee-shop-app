import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductInfo from '../components/products/ProductInfo';
import ProductDescription from '../components/products/ProductDescription';
import ProductSizeSelector from '../components/products/ProductSizeSelector';
import BuyBar from '../components/products/BuyBar';
import ProductHeader from '@/components/products/ProductHeader';

export default function ProductDetailScreen() {
    return (
        <View style={styles.container}>
            <ProductHeader />
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <ProductInfo />
                <ProductDescription />
                <ProductSizeSelector />
            </ScrollView>

            <BuyBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    content: {
        paddingBottom: 20,
    },
});
