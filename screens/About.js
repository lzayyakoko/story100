import React from "react";
import { View, Text} from "react-native";
import { globalStyle } from "../share/globalStyle";
import { AntDesign } from '@expo/vector-icons';

const About=()=>{
    return(
        <View style={globalStyle.container}>
            <View style={[globalStyle.boxshadow,globalStyle.aboutContainer]}>
                    <Text style={globalStyle.aboutIconTitle}>
                        <AntDesign name="questioncircleo" size={35} color="black" />
                    </Text>

                    <Text style={globalStyle.textSize}>
                        ပုံပြင် ၁၀၀ Application သည် အင်တာနက်ပေါ်မှာ ပုံပြင်စာပေများကို အလွယ်တကူ ဖတ်ရှုနိုင်ရန် ရည်ရွယ်၍ စုစည်း ရေးသားထားခြင်း ဖြစ်သည်။ 
                        ပုံပြင်ချစ်သူများကိုလဲ မိမိတို့ ကြိုက်နှစ်သက်သော စာအုပ်ကို သက်ဆိုင်ရာ စာအုပ်ဆိုင်မှ ဝယ်ယူဖတ်ရှု ကြဖို့တိုက်တွန်းလိုသည်။
                    </Text>

                    <Text style={globalStyle.textSize}>
                        Developer Team သို့ တခုခု အကြံပေးလိုပါက 
                        <Text style={globalStyle.textColor}>"goodcoder2000@gmail.com"</Text>
                         သို့ဆက်သွယ် နိုင်သည်။
                    </Text>

                    <Text style={globalStyle.textSize}>    ads ကြော်ညာ လုံးဝ မထည့်ထားသောကြောင့် developer team သို့ support လိုပါက Wave-09685 248 057</Text>
            </View>
        </View>
    );
}
export default About;