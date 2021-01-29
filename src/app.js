import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Init from './screens/init'
import Sign_in from './screens/signin'

const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Sign_in"
                headerMode='false'
            >
                <Stack.Screen
                    name='Init'
                    component={ Init }
                >
                </Stack.Screen>
                <Stack.Screen
                    name='Sign_in'
                    component={ Sign_in }
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
