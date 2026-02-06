import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/cheflogo.png")}
                style={styles.logo}
            />


            <Text style={styles.heading}>SPICE TALES</Text>

            <Text style={styles.subtitle}>
                Where spices meet stories!
            </Text>

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

            <TouchableOpacity
                style={[styles.button, styles.logoutButton]}
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                    })
                }
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>


            <View style={styles.infoContainer}>
                <MaterialIcons name="restaurant" size={20} color="#FF7043" />
                <Text style={styles.infoText}>
                    Explore hundreds of recipes from around the world
                </Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: "#FF7043",
    },

    heading: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FF7043",
        marginTop: 10,
    },

    subtitle: {
        fontSize: 16,
        color: "#FF7043",
        marginBottom: 30,
    },

    button: {
        backgroundColor: "#FF7043",
        padding: 15,
        borderRadius: 12,
        width: "80%",
        alignItems: "center",
        marginVertical: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
    },

    infoText: {
        marginLeft: 8,
        fontSize: 14,
        color: "#FF7043",
    },

});
