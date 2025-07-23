import { View, ScrollView, StyleSheet } from 'react-native';
import PromoCard from '../components/home/PromoCard';
import BottomNav from '../components/home/BottomNav';
import Menu from '../components/home/Menu';
import Location from '../components/home/Location';
import CoffeeCard from '../components/home/CoffeeCard';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                {/* Location Section */}
                <Location />

                {/* Promo Card Section */}
                <PromoCard />

                {/* Menu Section */}
                <Menu />

                {/* You can insert CoffeeCard list here after it's built */}
                <CoffeeCard
                    name="Cappuccino"
                    description="Espresso with steamed milk"
                    price="3.99"
                    image={require('../assets/images/cappuccino.png')}
                    onAdd={() => console.log('Add to cart')}
                />

            </ScrollView>

            {/* Bottom Navigation Bar */}
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingBottom: 80,
        paddingHorizontal: 16,
        paddingTop: 20,
        gap: 24,
    },
});
