import { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text
} from "react-native";

export default function RecipeDetailScreen({ route }: any) {
    const { mealId } = route.params;
    const [recipe, setRecipe] = useState<any>(null);

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        )
            .then((res) => res.json())
            .then((data) => setRecipe(data.meals[0]))
            .catch((err) => console.log(err));
    }, []);

    if (!recipe) return null;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: recipe.strMealThumb }}
                style={styles.image}
            />

            <Text style={styles.title}>{recipe.strMeal}</Text>
            <Text style={styles.category}>
                Category: {recipe.strCategory}
            </Text>

            <Text style={styles.heading}>Instructions</Text>
            <Text style={styles.instructions}>
                {recipe.strInstructions}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    image: {
        width: "100%",
        height: 220,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
    },
    category: {
        fontSize: 16,
        marginVertical: 5,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    },
    instructions: {
        fontSize: 15,
        marginTop: 5,
        lineHeight: 22,
    },
});
