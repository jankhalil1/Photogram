import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    { id: '1', name: 'Rey', image: 'https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1725905528869/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w' },
    { id: '2', name: 'Hans', image: 'https://photo-cdn2.icons8.com/jlMWP0ww289yUPUet6BneIhb0FpBlion9RTTy0AcbXw/rs:fit:193:290/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMzA5L2U1Mjcx/NjU5LTM1NmMtNGRh/Yi1hODQzLWVkMWRm/M2EyNjcwMS5qcGc.jpg' },
    { id: '3', name: 'Monyol', image: 'https://thumbs.dreamstime.com/b/detailed-portrait-16694464.jpg' },
    { id: '4', name: 'Kent', image: 'https://thumbs.dreamstime.com/b/happy-smiling-portrait-16655550.jpg' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Add logic to filter the contacts list based on the searchQuery if needed
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Header with Recent and See All */}
      <View style={styles.header}>
        <Text style={styles.recentText}>Recent</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* List of Recent Contacts */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <Image source={{ uri: item.image }} style={styles.contactImage} />
            <Text style={styles.contactName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  recentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#007bff',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Search;