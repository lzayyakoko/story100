import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Details from "../screens/Details";
import About from "../screens/About";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import CustomHeader from "../share/CustomHeader";

const Stack = createStackNavigator();
const Tap = createBottomTabNavigator();

const HomeScreen=()=>{
    return(
        
    <Tap.Navigator
    tabBarOptions=  {{
        showLabel: false,
        style:  {
            backgroundColor:    "#fcd5ce",
            position:   "absolute",
            bottom: 20,
            left:   100,
            right:  100,
            borderRadius:   10,
            width:  200,
            height: 70,
        }
    }}
>
    <Tap.Screen name="Home" component={Home}
    options={
        {
            tabBarIcon: ({focused})=><Ionicons name="home-outline" size={focused? 30:25} color={focused? "red": "black"} />
        }
    }
    />

    <Tap.Screen name="About" component={About}
    options={
        {
            tabBarIcon: ({focused})=><AntDesign name="exclamationcircleo" size={focused? 30:25} color={focused? "red": "black"} />
        }
    }
    />
</Tap.Navigator>
    )
}

const Navigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}
                options={
                    {
                    title:  <CustomHeader/>,
                    headerTitleAlign:   "center",
                    headerStyle:    {
                        backgroundColor:    "#fec5bb"
                    }
                }
            }
                />
                <Stack.Screen name="Details" component={Details}
                options={
                    {
                    title:  <CustomHeader/>,
                    headerTitleAlign:   "center",
                    headerStyle:    {
                        backgroundColor:    "#fec5bb"
                    }
                }
            }
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;