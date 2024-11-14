import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View
      className="flex-1 items-center justify-center bg-white">
        <Image 
        source={require('../assets/image/cam.png')}
        style={{ width: 200, height: 200, borderRadius: 50 }}
      />
      <Text className="text-7xl font-extrabold text-black">PhotoGram</Text>
      <Link href="../(tabs)/home" className="text-3xl text-white font-rbold bg-blue-500 px-20 py-3 my-3 rounded-xl">Go to Home</Link>
      <Link href="/home" className="text-3xl text-white font-rbold bg-blue-500 px-20 py-3 my-3 rounded-xl">Log in</Link>
      <Link href="/registration" className="text-3xl text-white font-rbold bg-blue-500 px-20 py-3 rounded-xl">Sign up</Link>

      <StatusBar style="auto" />  
    </View>
  );
}