import { useEffect, useState } from "react";
import {
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
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

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{recipe.strMeal}</Text>

                <Text style={styles.category}>{recipe.strCategory}</Text>

                <Text style={styles.section}>Ingredients</Text>
                {ingredients.map((item, index) => (
                    <Text key={index} style={styles.listItem}>
                        • {item}
                    </Text>
                ))}

                <Text style={styles.section}>Instructions</Text>
                <Text style={styles.instructions}>
                    {recipe.strInstructions}
                </Text>

                {recipe.strYoutube && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Linking.openURL(recipe.strYoutube)}
                    >
                        <Text style={styles.buttonText}>Watch Video</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    image: {
        width: "100%",
        height: 250,
    },
    content: {
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    category: {
        color: "#FF7043",
        fontWeight: "bold",
        marginBottom: 15,
    },
    section: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    },
    listItem: {
        marginTop: 5,
        fontSize: 15,
    },
    instructions: {
        marginTop: 8,
        lineHeight: 22,
    },
    button: {
        backgroundColor: "#FF7043",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
