import React from "react";
import { View, Text} from "react-native";
import { globalStyle } from "../share/globalStyle";

const NoInternet=()=>{
    return(
        <View style={[globalStyle.container, globalStyle.nointernet]}>
            <View style={[globalStyle.boxshadow,globalStyle.aboutContainer]}>
                <Text style={globalStyle.textSize}>အင်တာနက် ဖွင့်ပြီး ပြန်ဝင်ပါ</Text>
            </View>
        </View>
    )
}
export default NoInternet;