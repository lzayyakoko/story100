import React from "react";
import { View, Text} from "react-native";
import { globalStyle } from "./globalStyle";

const CustomHeader=()=>{
    return(
        <View style={globalStyle.CustomHeader}>
            <Text style={globalStyle.CustomHeaderText}>ပုံပြင် ၁၀၀</Text>
        </View>
    );
}
export default CustomHeader;