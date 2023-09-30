import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TempRouter from "./pages/TempRouter";
import Login from "./pages/Login";
import SetProfile from "./pages/SetProfile";
import SetUnits from "./pages/SetUnits";
import Splash from "./pages/Splash";
import Settings from "./pages/Settings";
import SettingDetails from "./pages/SettingDetails";
import Statistics from "./pages/Statistics";
import StatisticsDaily from "./pages/StatisticsDaily";
import StatisticsWeekly from "./pages/StatisticsWeekly";
import Status from "./pages/Status";
import colors from "./style";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [units, setUnits] = useState({
    length: "cm",
    weight: "kg",
    volume: "ml",
    sex: "M",
  }); // 이걸 settings data로 규정하고 이름 설정. 그리고 GET 요청으로 해당 state 업데이트 후 뿌려주기. 이 state로 settings data를 하나의 트랜잭션으로 취급
  const [userData, setUserData] = useState({}); // settings data와 user data 구분 필요
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TempRouter">
        <Stack.Screen name="TempRouter">
          {isLoading
            ? (props) => <Splash {...props} />
            : (props) => <TempRouter {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Splash">
          {(props) => <Splash {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SetUnits">
          {(props) => <SetUnits {...props} units={units} setUnits={setUnits} />}
        </Stack.Screen>

        <Stack.Screen name="SetProfile">
          {(props) => (
            <SetProfile {...props} units={units} setUnits={setUnits} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {(props) => <Settings {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SettingDetails">
          {(props) => (
            <SettingDetails {...props} units={units} setUnits={setUnits} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Statistics">
          {(props) => <Statistics {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Status">
          {(props) => <Status {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
