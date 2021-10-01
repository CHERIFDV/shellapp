import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Image, Dimensions, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Employees from './Employees';
import Test from './Shell';

const { width, height } = Dimensions.get("window");


const Tab = createBottomTabNavigator();

const Home = () => {
    return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Accueil') {
          
               let shell=( <Entypo name="home"
                size={size}
                color={color}
              />)
          
              let shell1=( <AntDesign 
                name={'home'}
                size={size}
                color={color}
              />)


               if(focused){
                   return(shell)
               }else{
                return(shell1)
               }
            
          } else if (route.name === 'Employees') {
            
            let shell1=( <Entypo name="tools"
            size={size}
            color={color}
          />)
      
          let shell=( <AntDesign 
            name={'tool'}
            size={size}
            color={color}
          />)


           if(focused){
               return(shell)
           }else{
            return(shell1)
           }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
        <Tab.Screen name = 'Accueil' component = {Test} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen
        name="Shell"
         component={Test}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size*1.1, height: size }}
                  source={require('./48388691_862745473896003_5619695876223008768_n(1).png')}
                />
              );
            },
          }}
        />
        <Tab.Screen name = 'Employees' component = {Employees}/>
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
  splash:{
      justifyContent : 'center',
      height : height*0.2,
      width : width*0.4,
      marginBottom : 80,
      resizeMode: 'stretch'
  },
  

});
export default Home
