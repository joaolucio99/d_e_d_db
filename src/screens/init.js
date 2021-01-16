import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements';

import init from "./screens/init"

const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="init"
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name='init'
                    component={init}
                    options= {({ navigation }) => {
                        return {
                            title: 'init',
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white"></Icon>}
                                ></Button>
                            )
                        }
                    }}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}