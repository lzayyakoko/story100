import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container:  {
        paddingTop: 10,
        flex:   1,
        backgroundColor:  "#e8e8e4"  
     },
     nointernet:    {
        justifyContent: "center",
        alignItems: "center"
     },
    eachTag:    {
        backgroundColor:    "#fae1dd",
        padding:    15,
        marginTop:  10,
        marginHorizontal:   20,
        borderRadius:   15,
        flexDirection:  "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    titleText:  {
        color:  "#333",
        fontSize:   20,
        marginLeft: 5,
    },
    leftContainer:  {
        flexDirection:  "row",
    },
    authorText: {
        color:  "#333",
        fontWeight: "500"
    },
    detailsBackground:  {
        backgroundColor:    "#fcd5ce"
    },
    detailsContainer:   {
        marginVertical: 10,
        marginHorizontal:   15,
        
        borderRadius:   15,
        paddingVertical:    10,
        paddingHorizontal:  10,
    },
    detailsTitle:   {
        fontSize:   25,
        fontWeight: "bold",
        textAlign:  "center",
    },
    detailsAuthor:  {
        fontSize:   15,
    },  
    detailsBody:    {
        marginTop:  10,
        fontSize:   19,
        textAlign:  "justify"
    },
    boxshadow:  {
        shadowColor:    "#333",
        shadowRadius:   10,
        shadowOffset:   {
            width:  5,
            height: 5
        },
        elevation:  4,
    },
    CustomHeaderText:   {
        color:  "#333",
        fontSize:   23,
    },
    nightMode:  {
        width:    120, 
        backgroundColor:    "lightgray",
        borderRadius:   10, 
        flexDirection:  "row", 
        padding: 10, 
        alignSelf:  "flex-end", 
        marginBottom:   10
    },
    aboutContainer: {
        backgroundColor:    "#fae1dd",
        marginHorizontal:   20,
        borderRadius:   15,
        justifyContent: "center",
        padding:    10,
    },
    aboutIconTitle: {
        textAlign:  "center",
        marginVertical: 15,
    },
    textSize:   {
        fontSize:   16,
        textAlign:  "justify"
    },
    textColor:  {
        color:  "red"
    }
})