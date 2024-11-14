import { Image, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )

}



const TabLayout = () =>{
  return (
    <>
        <Tabs>
          <Tabs.Screen
          name="home"
          options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
          <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
          />
        )
      }}
      />//end of tab icon 



<Tabs.Screen
      name="user"
      options={{
        title:'User',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
            icon={icons.user}
            color={color}
            name="User"
            focused={focused}
          />
        )
      }}
      />

<Tabs.Screen
      name="heart"
      options={{
        title:'Heart',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
            icon={icons.heart}
            color={color}
            name="Heart"
            focused={focused}
          />
        )
      }}
      />

<Tabs.Screen
      name="search"
      options={{
        title:'Search',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
            icon={icons.search}
            color={color}
            name="Search"
            focused={focused}
          />
        )
      }}
      />

    </Tabs>
      
    </>
  )
}

export default TabLayout

// const TabsLayout = () => {
//   return (
//     <View>
//       <Image>
//         source={} 
//       </Image>
//     </View>
//   )
// }

