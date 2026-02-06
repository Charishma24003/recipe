import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen({ navigation }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Home");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]); // fixed dependency warning

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipe App</Text>
            <Text>Loading delicious recipes...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
