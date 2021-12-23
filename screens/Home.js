import React, {useState} from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { globalStyle } from "../share/globalStyle";
import { Entypo } from '@expo/vector-icons';
import FetchingData from "../share/FetchingData";

const Home=({navigation})=>{
    const { datas } = FetchingData();
  
    return(
        <View style={globalStyle.container}>
            {datas && datas.map((item)=>{
                return(
                    <TouchableOpacity
                    key={item.id}
                    style={[globalStyle.eachTag, globalStyle.boxshadow]}
                    onPress={()=>navigation.navigate("Details", item)}
                    >
                        <View style={globalStyle.leftContainer}>
                            <View>
                                <Entypo name="book" size={24} color="black" />
                            </View>
                            <Text style={globalStyle.titleText}>{item.title}</Text>
                        </View>

                        <View>
                            {/* မူလပေ့က စာရေးသူနေရာမာ နေ့စွဲကို သုံးထားသည် */}
                            <Text style={globalStyle.authorText}>{item.date}</Text> 
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}
export default Home;