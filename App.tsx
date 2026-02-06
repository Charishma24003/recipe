import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "./src/screens/CategoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";
import RecipeListScreen from "./src/screens/RecipeListScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SplashScreen from "./src/screens/SplashScreen";


import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});


if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
    });
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#FF7043" },
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                }}
            >
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Categories" component={CategoryScreen} />
                <Stack.Screen name="Recipes" component={RecipeListScreen} />
                <Stack.Screen name="Details" component={RecipeDetailScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
