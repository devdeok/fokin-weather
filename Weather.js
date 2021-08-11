import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from"prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";

// 여러줄 수정하는 단축키 Ctril + Alt + (Up or Down)
const weatherOptions = {
    Rain: {
        iconName:"weather-pouring",
        gradient:["#26D0CE","#1A2980"],
        title:"Rain",
        subtitle: "Just don't go outside"
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient:["#2980b9","#2c3e50"],
        title:"Clouds",
        subtitle: "Just don't go outside"
    },
    ThunderStorm: {
        iconName:"weather-lightning",
        gradient:["#141E30","#243B55"],
        title:"ThunderStorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName:"weather-partly-rainy",
        gradient:["#00C9FF","#92FE9D"],
        title:"Dirzzle",
        subtitle: "Is like rain, but gay 🌈"
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#FFFDE4","#005AA7"],
        title:"Clod as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName:"weather-sunny",
        gradient:["#F0CB35","#C02425"],
        title:"Atmisphere",
        subtitle: "Just don't go outside"
    },
    Clear: {
        iconName:"weather-sunny",
        gradient:["#4DA0B0","#D39D38"],
        title:"Clear",
        subtitle: "Just don't go outside"
    },
    Mist: {
        iconName:"weather-fog",
        gradient:["#757F9A","#D7DDE8"],
        title:"Mist",
        subtitle: "Just don't go outside"
    },
    Dust: {
        iconName:"weather-hail",
        gradient:["#BA8B02","#181818"],
        title:"Dusty",
        subtitle: "Thanks a lot fucking China ㅗ"
    },
    Haze:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle: "Just don't go outside"
    }
}

export default function Weather({temp, condition}){
    console.log(condition)
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons
                size={85}
                name={weatherOptions[condition].iconName}
                color="white"
                /> 
                <Text style={styles.temp}>{temp}ºC </Text>
            </View>
            {/*밑에 있는 코드는 es6방식*/}
            <View style = {{ ...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes={
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "ThunderStorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:35,
        color:"white"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        fontSize:50,
        fontWeight:"300",
        color:"white",
        marginBottom:10
    },
    subtitle: {
        fontSize:20,
        fontWeight:"600",
        color:"white"
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }

});
