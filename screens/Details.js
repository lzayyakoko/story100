import React, { useState} from "react";
import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import { globalStyle } from "../share/globalStyle";
import { MaterialIcons } from '@expo/vector-icons';

let counter = true;
const Details=({route})=>{
    const [ color, setColor] = useState("#ece4db");
    const [ textColor, setTextColor] = useState("#333");
    const { title, author, body } = route.params;
    
    const modeChange=()=>{
        if(counter){
            setColor("#333");
            setTextColor("#fff");
            counter = false;
        } else  {
            setColor("#fff");
            setTextColor("#333");
            counter = true;
        }
    }
    return(
        <ScrollView style={globalStyle.detailsBackground}>
            <View style={[{backgroundColor:   color },globalStyle.detailsContainer, globalStyle.boxshadow]}>

                <TouchableOpacity style={globalStyle.nightMode} onPress={modeChange}>
                            <Text>Night Mode</Text>
                            <MaterialIcons name="nightlight-round" size={24} color="black" />
                </TouchableOpacity>
                
                <View>
                    <Text style={[{color:   textColor}, globalStyle.detailsTitle]}>"{title}"</Text>
                    <Text style={[{color:   textColor}, globalStyle.detailsAuthor]}>စာရေးသူ - {author}</Text>
                    <Text style={[{color:   textColor}, globalStyle.detailsBody]}>        {body}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
export default Details; 