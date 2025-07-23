import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function OnboardingScreen() {
    const router = useRouter();

    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Fall in Love with Coffee in Blissful Delight!
                    </Text>
                    <Text style={styles.subtitle}>
                        Welcome to our cozy coffee corner, where every cup is a delight for you.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '6%',
        paddingVertical: '10%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: RFPercentage(5),

    },
    title: {
        color: '#fff',
        fontSize: RFPercentage(5),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: RFPercentage(2),
        lineHeight: RFPercentage(6),
        marginTop: RFPercentage(2),
    },
    subtitle: {
        color: '#ccc',
        fontSize: RFPercentage(2.2),
        textAlign: 'center',
        marginBottom: RFPercentage(4),
        paddingHorizontal: '4%',
        lineHeight: RFPercentage(3),
    },
    button: {
        backgroundColor: '#cc7a35',
        paddingVertical: RFPercentage(2),
        borderRadius: 12,
        alignItems: 'center',
        marginTop: RFPercentage(2),
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: RFPercentage(2.5),
    },
});
