import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://i.pravatar.cc/150?img=32",
                }}
                style={styles.avatar}
            />

            <Text style={styles.name}>Charishma</Text>
            <Text style={styles.email}>charishma@email.com</Text>

            <View style={styles.infoBox}>
                <Text style={styles.label}>Favorite Cuisine</Text>
                <Text style={styles.value}>Indian</Text>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.label}>Cooking Level</Text>
                <Text style={styles.value}>Beginner</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 40,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
    },
    email: {
        fontSize: 16,
        color: "gray",
        marginBottom: 20,
    },
    infoBox: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        elevation: 2,
    },
    label: {
        fontWeight: "bold",
    },
    value: {
        marginTop: 4,
    },
});
