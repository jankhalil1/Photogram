import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const notifications = [
  {
    id: '1',
    type: 'like',
    name: 'Hansqt',
    message: 'liked your post.',
    time: '2h',
    image: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/280349293_1655425638163833_5961501584405071063_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7lAl6qEjI2eL7z3YTiQ7_5r0qDjFfbrfmvSoOMV9ut5ymSxhHjQq3ofN9NVKJhmOiqg9jM13fXKdyLY0F2-RN&_nc_ohc=4Vt3S5vbWhkQ7kNvgE3oBQN&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A365Cr8r_tClaGeUaMA85Tx&oh=00_AYBegkK1KFLCgqvhEmWoPg6CL0llZyo1UwmI6Tk3NK0Z1g&oe=670A1AAD',
    
  },
  {
    id: '2',
    type: 'request',
    name: 'calianedourado4',
    message: 'requested to follow you.',
    time: '3h',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    buttons: ['Confirm', 'Delete'],
  },
  
  {
    id: '3',
    type: 'share',
    name: 'Hansqt',
    message: 'shared your post.',
    time: '1d',
    image: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/280349293_1655425638163833_5961501584405071063_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7lAl6qEjI2eL7z3YTiQ7_5r0qDjFfbrfmvSoOMV9ut5ymSxhHjQq3ofN9NVKJhmOiqg9jM13fXKdyLY0F2-RN&_nc_ohc=4Vt3S5vbWhkQ7kNvgE3oBQN&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A365Cr8r_tClaGeUaMA85Tx&oh=00_AYBegkK1KFLCgqvhEmWoPg6CL0llZyo1UwmI6Tk3NK0Z1g&oe=670A1AAD',
  },
  {
    id: '4',
    type: 'like',
    name: 'Juan',
    message: 'liked your post.',
    time: '1d',
    image: 'https://thumbs.dreamstime.com/b/man-feeling-suspicious-face-expression-emotion-hesitating-facial-studio-shot-white-isolated-background-copy-space-90927117.jpg',
    
  },
  {
    id: '5',
    type: 'request',
    name: 'Rey Gwapo',
    message: 'requested to follow you.',
    time: '2d',
    image: 'https://pbs.twimg.com/profile_images/1823173402125070336/i09edYWA_400x400.jpg',
    buttons: ['Confirm', 'Delete'],
  },
  {
    id: '6',
    type: 'request',
    name: 'kaken gaming',
    message: 'requested to follow you.',
    time: '3d',
    image: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/412399495_1523390381842676_6923291643964580859_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHH_MrMBvDRNXRecgx2NFenMkelFhAK0NMyR6UWEArQ08szjvHGaiNeTWsx5GyxUmw1fTeviGbUN9BwN8BAaPOG&_nc_ohc=8D3LG3WC7mIQ7kNvgFcp6up&_nc_ht=scontent.fceb3-1.fna&_nc_gid=AsQWA_w1f0GBUegnZJElG6o&oh=00_AYALtBKU98oMTWPqEl9kq8csh7KiNtDCUoNTpm6TRNRrlA&oe=670A1D0B',
    buttons: ['Confirm', 'Delete'],
  },
  {
    id: '7',
    type: 'request',
    name: 'ako si joahness',
    message: 'requested to follow you.',
    time: '4d',
    image: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/411770740_1948471348880284_484356854149329432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcL_fFDHt5LAljOTTQWK9oFVE_pIU8xwcVUT-khTzHB32ozlR2WyzXax1ABiKBFfDe3dyL5eBhZWxNNL4s7t0B&_nc_ohc=x08L76iN0iwQ7kNvgFwbzEg&_nc_ht=scontent.fceb3-1.fna&_nc_gid=AzcAvXmK2OYKQFNBYEuM8ZV&oh=00_AYC11ViMzCdiu-n9OdCQv3qL2JQ0Uwjv2RridTlkF30ioA&oe=670A1531',
    buttons: ['Confirm', 'Delete'],
  },
  {
    id: '8',
    type: 'like',
    name: 'Ian de kwelyo',
    message: 'liked your post.',
    time: '5d',
    image: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t1.6435-9/79683412_1490947461061178_6918823822841872384_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGRYQJAvt0CrRfKZJwPdRj9yd3qWKKOiWXJ3epYoo6JZSlzdEQSZHyNNdH9tKpqnq2xbM7SDs5EVl8nUA-F81kH&_nc_ohc=-pNWXhr9AQgQ7kNvgFa9fFR&_nc_ht=scontent.fceb3-1.fna&_nc_gid=ArO-H8A1qE5yDCgS-48kftE&oh=00_AYAw9PwveYJuNlBbADkNAW6RhiQfspkRsNFMm5Aaysz1pA&oe=67137306',
   
  },
  {
    id: '9',
    type: 'comment',
    name: 'Vanix',
    message: 'commented your post.',
    time: '6d',
    image: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t1.6435-9/120846577_810464099706892_8492527224920875370_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHNwXYtpm4BuL0Q8T79yxsPSnC8e-oE9shKcLx76gT2yC89QY28BYFppEiHsSWQ9fBsO5fUfXlQOXIEF7IWyACg&_nc_ohc=o7NTns3hneIQ7kNvgHed4Vj&_nc_ht=scontent.fceb3-1.fna&oh=00_AYD2tHPYa0-lNDzPITOZmvbbiuMj0uLZBdeBwRbxJR8r0g&oe=67137F14',
  
  },
  
];

const NotificationItem = ({ item }) => {
  return (
    <View style={styles.notificationItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.username}>{item.name}</Text> {item.message}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      {item.buttons && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const Heart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <Text style={styles.sectionHeader}>Today</Text>
      <FlatList
        data={notifications.slice(0, 2)} // "Today" notifications
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />

      <Text style={styles.sectionHeader}>This Week</Text>
      <FlatList
        data={notifications.slice(2)} // "This Week" notifications
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationContent: {
    flex: 1,
    marginLeft: 12,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  username: {
    fontWeight: 'bold',
    color: '#000',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Heart;