import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.header} />


            <View style={styles.profileCard}>
                <Image
                    source={{
                        uri: "https://randomuser.me/api/portraits/women/44.jpg",
                    }}
                    style={styles.avatar}
                />

                <Text style={styles.name}>Hezel Rodrigues</Text>
                <Text style={styles.email}>hezelro@email.com</Text>
            </View>


            <View style={styles.card}>
                <MaterialIcons name="restaurant" size={22} color="#FF7043" />
                <Text style={styles.cardText}>Food Enthusiast</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="favorite" size={22} color="#FF7043" />
                <Text style={styles.cardText}>Loves Desserts</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="menu-book" size={22} color="#FF7043" />
                <Text style={styles.cardText}>Recipe Explorer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },

    header: {
        backgroundColor: "#FF7043",
        width: "100%",
        height: 120,
    },

    profileCard: {
        backgroundColor: "#fff",
        width: "85%",
        alignItems: "center",
        padding: 20,
        borderRadius: 16,
        marginTop: -40,
        elevation: 3,
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

    name: {
        fontSize: 20,
        fontWeight: "bold",
    },

    email: {
        color: "gray",
    },

    card: {
        backgroundColor: "#fff",
        width: "85%",
        padding: 15,
        borderRadius: 12,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        elevation: 2,
    },

    cardText: {
        marginLeft: 10,
        fontSize: 16,
    },
});
