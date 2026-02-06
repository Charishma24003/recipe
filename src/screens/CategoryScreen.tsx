import { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function CategoryScreen({ navigation }: any) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json())
            .then((data) => {
                const allowedCategories = [
                    "Starter",
                    "Chicken",
                    "Vegetarian",
                    "Seafood",
                    "Dessert",
                    "Miscellaneous",
                ];

                const filtered = data.categories.filter((cat: any) =>
                    allowedCategories.includes(cat.strCategory)
                );

                setCategories(filtered);
            })
            .catch((err) => console.log(err));
    }, []);

    const getCategoryName = (name: string) => {
        if (name === "Starter") return "Appetizers";
        if (name === "Miscellaneous") return "Beverages";
        return name;
    };

    // Custom category images
    const getCategoryImage = (name: string) => {
        switch (name) {
            case "Starter":
                return "https://images.unsplash.com/photo-1541014741259-de529411b96a";
            case "Chicken":
                return "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d";
            case "Vegetarian":
                return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c";
            case "Seafood":
                return "https://images.unsplash.com/photo-1559737558-2f5a35f4523b";
            case "Dessert":
                return "https://images.unsplash.com/photo-1551024506-0bccd828d307";
            case "Miscellaneous":
                return "https://images.unsplash.com/photo-1544145945-f90425340c7e";
            default:
                return "https://images.unsplash.com/photo-1490645935967-10de6ba17061";
        }
    };

    return (
        <FlatList
            data={categories}
            keyExtractor={(item: any) => item.idCategory}
            renderItem={({ item }: any) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                        navigation.navigate("Recipes", {
                            category: item.strCategory,
                        })
                    }
                >
                    <Image
                        source={{ uri: getCategoryImage(item.strCategory) }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>
                        {getCategoryName(item.strCategory)}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 12,
        alignItems: "center",
        elevation: 3,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
});
