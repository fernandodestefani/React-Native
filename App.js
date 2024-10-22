import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import CourseListScreen from "./screens/CourseListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: 'beside-icon',
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey'
            }}>
                <Tab.Screen name="Course List" component={CourseListScreen} options={{
                    tabBarLabel: 'Course List',
                    tabBarIcon: ({color}) => (<Ionicons name="list" size={25} color={color}/>)
                }}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({color}) => (<Ionicons name="person" size={20} color={color}/>),
                    tabBarBadge: 3
                }}/>
                <Tab.Screen name="Settings" component={SettingsScreen} options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color}) => (<Ionicons name="settings" size={25} color={color}/>)
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}