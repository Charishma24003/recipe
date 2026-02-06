import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen({ navigation }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Login");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);


    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/cheflogo.png")}
                style={styles.logo}
            />

            <Text style={styles.title}>Spice Tales</Text>
            <Text style={styles.subtitle}>Cook something delicious</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF7043",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    subtitle: {
        color: "#fff",
        marginTop: 5,
    },
});
