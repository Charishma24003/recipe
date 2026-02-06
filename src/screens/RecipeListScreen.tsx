import { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function RecipeListScreen({ route, navigation }: any) {
    const { category } = route.params;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        )
            .then((res) => res.json())
            .then((data) => setRecipes(data.meals || []))
            .catch((err) => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={(item: any) => item.idMeal}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("Details", {
                                mealId: item.idMeal,
                            })
                        }
                    >
                        <Image
                            source={{ uri: item.strMealThumb }}
                            style={styles.image}
                        />

                        <View style={styles.textBox}>
                            <Text style={styles.title}>{item.strMeal}</Text>
                        </View>
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
        margin: 12,
        backgroundColor: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 180,
    },
    textBox: {
        padding: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
});
