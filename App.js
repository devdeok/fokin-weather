import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "52479588688995e4086ceec8ab61a0cd";

//container는 parent
export default class extends React.Component {
  state={
    isLoading: true
  };

  getWeather = async(latitude, longitude) =>{
    const { 
      data: {
        main :{temp},
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp
      })
  };

  getLocation = async() =>{
    try{
      await Location.requestForegroundPermissionsAsync();
      // await functionality
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      // Send to API and get weather
    } catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
  };   

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const{isLoading, temp, condition}=this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition = {condition}/>;
  }

}

// flex:1은 모든 공간 사용을 의미, 레이아웃을 짤 때 사용
// flexDirection: "row",
// alignItems: 'center',
// justifyContent: 'center',
// direction, flexwrap, nowrap