import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipe App</Text>

            <View style={styles.button}>
                <Button
                    title="Browse Recipes"
                    onPress={() => navigation.navigate("Categories")}
                />
            </View>

            <View style={styles.button}>
                <Button
                    title="Profile"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 30,
    },
    button: {
        width: "60%",
        marginVertical: 10,
    },
});
