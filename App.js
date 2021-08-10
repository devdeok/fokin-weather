import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";

//container는 parent
export default function App() {
  return <Loading />;
}

// flex:1은 모든 공간 사용을 의미, 레이아웃을 짤 때 사용
// flexDirection: "row",
// alignItems: 'center',
// justifyContent: 'center',
// direction, flexwrap, nowrap
