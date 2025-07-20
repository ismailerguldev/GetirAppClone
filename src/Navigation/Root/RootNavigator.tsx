import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import HomeNavigator from '../HomeNavigator';
import Entypo from '@expo/vector-icons/Entypo';
import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
const Tab = createBottomTabNavigator()
export type RootTabParams = {
    HomePage: undefined,
    Search: undefined,
    List: undefined,
    User: undefined,
    Gift: undefined
}
const RootNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='HomePage' screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#5C3EBC",
            tabBarInactiveTintColor: "#959595",
            headerShown: false,
            tabBarStyle: {
                height: 80,
            }
        }}>
            <Tab.Screen name='HomePage' component={HomeNavigator} options={({ route }) => ({
                tabBarIcon: ({ color }) => (<FontAwesome5 name="home" size={24} color={color} />),
                tabBarStyle: getTabBarStyle(route)
            })} />
            <Tab.Screen name='Search' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (<FontAwesome5 name="search" size={24} color={color} />)
            }} />
            <Tab.Screen name='List' component={HomeNavigator} options={{
                tabBarIcon: () => <ListButton />
            }} />
            <Tab.Screen name='User' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (<FontAwesome5 name="user-alt" size={24} color={color} />)
            }} />
            <Tab.Screen name='Gift' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (<FontAwesome5 name="gift" size={24} color={color} />)
            }} />
        </Tab.Navigator >
    )
}
const ListButton = () => (
    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: "#5C3EBC", justifyContent: "center", alignItems: "center", borderRadius: 25 }}>
        <Entypo name='list' size={32} color="#FFD00C" />
    </TouchableOpacity>
)
function getTabBarStyle(route: RouteProp<Record<string, object | undefined>, string>) {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'ProductDetails' || routeName === "CartScreen") {
        return { display: 'none' as const };
    }

    return {
        height: 80 as const,
    };
}
export default RootNavigator

const styles = StyleSheet.create({})