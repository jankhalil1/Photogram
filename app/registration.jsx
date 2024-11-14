import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';

const Registration = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!mobileOrEmail || !fullName || !username || !password) {
      Alert.alert('Validation Error', 'Please fill out all fields.');
      return;
    }
    
    Alert.alert('Registration Successful', 'You have registered successfully!');
    console.log({ mobileOrEmail, fullName, username, password });
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/image/cam.png')}
        style={{ width: 200, height: 200, borderRadius: 50 }}
      /> 
      <Text className="text-7xl font-extrabold text-black">PhotoGram</Text>
     
      <Text style={styles.label}>Mobile Number or Email</Text>
      <TextInput
        style={styles.input}
        value={mobileOrEmail}
        onChangeText={setMobileOrEmail}
        placeholder="Enter mobile number or email"
        keyboardType="email-address"
      />
      
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter full name"
      />
      
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',  
    padding: 12,
    borderRadius: 4,
    width: '100%',              
    alignItems: 'center',        
  },
  buttonText: {
    fontSize: 20,                
    color: '#FFFFFF',            
    fontWeight: 'bold',          
  },
});

export default Registration;