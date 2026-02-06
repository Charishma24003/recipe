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
            .then((data) => setRecipes(data.meals))
            .catch((err) => console.log(err));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={recipes}
                keyExtractor={(item: any) => item.idMeal}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("Details", {
                                mealId: item.idMeal,
                            })
                        }
                    >
                        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                        <Text style={styles.title}>{item.strMeal}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        elevation: 2,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 10,
    },
    title: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
