import * as React from "react";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { colors } from "./src/utils/colors";

const Stack = createStackNavigator();

const logoSize = 48;
const LogoImg = (
  <Image
    source={require("./src/assets/logo.png")}
    style={{
      width: logoSize,
      height: logoSize,
      marginHorizontal: 4,
    }}
  />
);

const defaultScreenOptions: StackNavigationOptions = {
  headerTitleStyle: {
    color: colors.text.light,
    textTransform: "uppercase",
  },
  headerTitleContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: logoSize,
  },
  headerStyle: {
    backgroundColor: colors.primary.default,
  },
  headerRight: () => LogoImg,
};

function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary.dark} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: "Aulas",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
