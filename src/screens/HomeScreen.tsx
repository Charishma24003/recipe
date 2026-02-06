import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.sub}>Find your favorite recipes</Text>

            <Image
                source={require("../../assets/images/cheflogo.png")}
                style={styles.logo}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Categories")}
            >
                <Text style={styles.buttonText}>Browse Recipes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Profile")}
            >
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
    },
    sub: {
        color: "gray",
        marginBottom: 20,
    },
    logo: {
        width: 140,
        height: 140,
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#FF7043",
        padding: 14,
        borderRadius: 10,
        width: "70%",
        alignItems: "center",
        marginVertical: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
