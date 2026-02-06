import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: "https://i.pravatar.cc/200",
                    }}
                    style={styles.avatar}
                />

                <Text style={styles.name}>Aanya Sharma</Text>
                <Text style={styles.email}>aanya.sharma@email.com</Text>

                <View style={styles.infoRow}>
                    <MaterialIcons name="restaurant" size={20} color="#FF7043" />
                    <Text style={styles.infoText}>Food Enthusiast</Text>
                </View>

                <View style={styles.infoRow}>
                    <MaterialIcons name="favorite" size={20} color="#FF7043" />
                    <Text style={styles.infoText}>Loves Desserts</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#fff",
        width: "85%",
        borderRadius: 16,
        padding: 25,
        alignItems: "center",
        elevation: 3,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
    },
    email: {
        color: "gray",
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    infoText: {
        marginLeft: 8,
        fontSize: 15,
    },
});
