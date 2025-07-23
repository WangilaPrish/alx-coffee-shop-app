import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function BottomNav() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/home')}>
                <Image
                    source={require('../../assets/icons/Home.png')}
                    style={[styles.icon, styles.activeIcon]}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/favorites')}>
                <Image
                    source={require('../../assets/icons/Heart.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/cart')}>
                <Image
                    source={require('../../assets/icons/bag.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/notification')}>
                <Image
                    source={require('../../assets/icons/bell.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: RFPercentage(1.8),
        paddingHorizontal: RFPercentage(2),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    icon: {
        width: RFPercentage(3.2),
        height: RFPercentage(3.2),
        tintColor: '#aaa',
    },
    activeIcon: {
        tintColor: '#cc7a35',
    },
});
