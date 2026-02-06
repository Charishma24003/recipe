import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const categories = [
    {
        name: "Vegetarian",
        api: "Vegetarian",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
        name: "Chicken",
        api: "Chicken",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    },
    {
        name: "Seafood",
        api: "Seafood",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b",
    },
    {
        name: "Desserts",
        api: "Dessert",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    },
    {
        name: "Appetizers",
        api: "Starter",
        image: "https://images.unsplash.com/photo-1541014741259-de529411b96a",
    },
    {
        name: "Pasta",
        api: "Pasta",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    },
    {
        name: "Breakfast",
        api: "Breakfast",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    },
    {
        name: "Side Dishes",
        api: "Side",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },
    {
        name: "Lamb",
        api: "Lamb",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
    {
        name: "Vegan",
        api: "Vegan",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },
];

export default function CategoryScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("Recipes", {
                                category: item.api,
                            })
                        }
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 120,
    },
    title: {
        padding: 12,
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FF7043",
    },
});
