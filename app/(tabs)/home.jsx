import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';

const stories = [
  { id: '1', name: 'Lina', image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg' },
  { id: '2', name: 'Maiden', image: 'https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?cs=srgb&dl=pexels-soldiervip-1382726.jpg&fm=jpg' },
  { id: '3', name: 'Rey', image: 'https://pbs.twimg.com/profile_images/1823173402125070336/i09edYWA_400x400.jpg' },
  { id: '4', name: 'Lanaya', image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Templar_Assassin_Lore.png/revision/latest?cb=20210729214625' },
  { id: '5', name: 'Taylor Shish', image: 'https://media.npr.org/assets/img/2023/07/20/dscf4329_custom-e08bd3961be5acfb141f497a300ed686341597e2.jpg?s=1100&c=85&f=jpeg' },
  { id: '6', name: 'Dummy ni Rey', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462076695_893099029412041_5979969627417236350_n.jpg?stp=dst-jpg_p2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGk1mKveSsE9rC1vLj-FOueo4FkXqW-AKmjgWRepb4Aqd5iwean2J1ERjgCx9VDjITdwxaCJtB8rrvSvLrGSqb_&_nc_ohc=RXrUiU3Ux1wQ7kNvgEOVlX-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Av8Hv1SHf-6CL2Iabc_vuuF&oh=03_Q7cD1QEeYVwCvvB4S6Ri54Foc4H8dR4zxy8FuVIACfVXU1wVHQ&oe=672BA956' },
];

const postsData = [
  {
    id: '1',
    username: 'Rey',
    location: 'Philippines',
    profilePic: 'https://pbs.twimg.com/profile_images/1823173402125070336/i09edYWA_400x400.jpg',
    postImage: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/330927975_736036554638183_8447845509677385381_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGt91mhe5aJVWlYla1qajx1OF0tV-UADH44XS1X5QAMfkH8eBksQ_YUmkMHB2tu_n4PyTetT3OlxyPISevO4UXS&_nc_ohc=x625lQ6ZOfUQ7kNvgFrORs_&_nc_ht=scontent.fceb3-1.fna&_nc_gid=AGoukK7wkESdL-BSk3Kcb-9&oh=00_AYAlIdJsMAAINnezslNdJ5PDebW5ScJlCzj44mhG_FTFzA&oe=670A1D38',
    likes: 496,
    caption: 'Molayas nako gikapoy nako sa akong kinabuhi!!!',
    time: '9 MINUTES AGO',
  },
  {
    id: '2',
    username: 'Monyol',
    location: 'Wa ragud',
    profilePic: 'https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?cs=srgb&dl=pexels-soldiervip-1382726.jpg&fm=jpg',
    postImage: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456502571_883908669889434_4211742521473504883_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEyRTVkcxcifxlZ7S75ue0dflr7vtU4Ha1-Wvu-1TgdrTZlkwoFxiUWjEdot-5IpssiJkeyxJZiBMeAXL2Z5KEU&_nc_ohc=znh_iXsiZowQ7kNvgGk_W-M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Av-jviWd9TJuM4mskGnETwP&oh=03_Q7cD1QFpQ1zSrYNvPrSON5BQSUHZyFLKzTcFzaWVRjKFrbh4rw&oe=67136695',
    likes: 342,
    caption: 'Chilling by the beach!',
    time: '2 HOURS AGO',
  },
  {
    id: '3',
    username: 'Drake',
    location: 'USA',
    profilePic: 'https://images-r2.thebrag.com/tmn/uploads/Drake-Scorpion.jpg',
    postImage: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454645135_861129332179866_6594915692686346287_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFAC8dh9NfqQM4ldl1rXimIX6dVZDWDpChfp1VkNYOkKMwe7OKzq-OCAxRnoDvKPZOPX8824nWsYT_BBo-j11x0&_nc_ohc=get19BKaKYwQ7kNvgFi3tHg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=A2IH5psBBB7nniL3mPVqXbW&oh=03_Q7cD1QHUc9FWkvdQCTYRKt6ehy4u0ChuY3MAwhevsCz_f7lOsA&oe=67136E79',
    likes: '5,000',
    caption: 'Shish',
    time: '3 HOURS AGO',
  },
  {
    id: '4',
    username: 'Eminem',
    location: 'USA',
    profilePic: 'https://nypost.com/wp-content/uploads/sites/2/2019/10/gettyimages-187596325.jpg?quality=75&strip=all&w=744',
    postImage: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/457632955_1199845487908466_4409154986856765733_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEGSY1ucYaYEW3O4wJRuLQXCj8GpTapoKgKPwalNqmgqCEix4YOCAF90FkFfS8CwpHpgV5V5KBqtyfHKsLtg_TB&_nc_ohc=hKHd0-MSjtoQ7kNvgGP1w82&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=A_Qd7fC-Gf4tMcnIvFOwFzA&oh=03_Q7cD1QG4Nt312eZ2b63ZSZ8vCpxYACmYcqEHoIfSVA4S_ejpmA&oe=67137980',
    likes: '10,000',
    caption: "Can't hear",
    time: '4 HOURS AGO',
  },
  {
    id: '5',
    username: '21Savage',
    location: 'USA',
    profilePic: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1037354_v9_bb.jpg',
    postImage: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456842938_1674241766729264_8221080047617035467_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGWGHrj5OgQT-fHig5j4pnRTN-bk2MOp4JM35uTYw6ngr4-LyDAfosq0VZ1YrNJzkqlhUjCeP9iPRMNC_GNQcSs&_nc_ohc=M_foHp0FdiIQ7kNvgEmdUJI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG-w88T7XchapDAAyWUHvvGeRvf9Q59iz6wQqyN3Aryag&oe=6713699E',
    likes: '6,000',
    caption: "hayst",
    time: '5 HOURS AGO',
  },
  {
    id: '6',
    username: 'Hansqt',
    location: 'PH',
    profilePic: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/280349293_1655425638163833_5961501584405071063_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7lAl6qEjI2eL7z3YTiQ7_5r0qDjFfbrfmvSoOMV9ut5ymSxhHjQq3ofN9NVKJhmOiqg9jM13fXKdyLY0F2-RN&_nc_ohc=4Vt3S5vbWhkQ7kNvgE3oBQN&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A365Cr8r_tClaGeUaMA85Tx&oh=00_AYBegkK1KFLCgqvhEmWoPg6CL0llZyo1UwmI6Tk3NK0Z1g&oe=670A1AAD',
    postImage: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/244761791_1508312639541801_4189285460348017495_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH4I-Xvg4zmgT8T09yFx0ZXh363HwdcQPmHfrcfB1xA-fLJAXQ3MNJRrybtxlWpn6KBIxAOWqpKhYoLnckjOXNS&_nc_ohc=LvoT0M9kK5QQ7kNvgHFOlEN&_nc_ht=scontent.fceb3-1.fna&_nc_gid=AFFOZCIPSoRL-X_Tec2bWEZ&oh=00_AYAAhJSZIu2HhtitKGmQTdgxm-RjKwmOlGZewtTxQx5yuQ&oe=670A215D',
    likes: '6,969',
    caption: "hayst",
    time: '21 HOURS AGO',
  },
  // More posts here...
];

const Home = () => {
  const [posts, setPosts] = useState(postsData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Stories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        <View style={styles.story}>
          <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1008650588697944064/2OghK9Sl_400x400.jpg' }} style={styles.storyImage} />
          <Text style={styles.storyText}>Your Story</Text>
        </View>
        {stories.map((story) => (
          <View key={story.id} style={styles.story}>
            <Image source={{ uri: story.image }} style={styles.storyImage} />
            <Text style={styles.storyText}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Posts */}
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
            <View>
              <Text style={styles.postUsername}>{post.username}</Text>
              <Text style={styles.postLocation}>{post.location}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => handleImagePress(post.postImage)}>
            <Image source={{ uri: post.postImage }} style={styles.postImage} />
          </TouchableOpacity>

          <View style={styles.postActions}>
            <TouchableOpacity onPress={() => toggleLike(post.id)}>
              <Image
                source={{
                  uri: post.liked
                    ? 'https://cdn-icons-png.flaticon.com/128/833/833472.png' // Filled heart (liked)
                    : 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png', // Empty heart (unliked)
                }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/134/134718.png' }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2958/2958791.png' }} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.likes}>{post.likes} likes</Text>
          <Text style={styles.caption}>
            <Text style={styles.bold}>{post.username} </Text>{post.caption}
          </Text>
          <Text style={styles.time}>{post.time}</Text>
        </View>
      ))}

      {/* Modal for Full-Screen Image */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          {selectedImage && <Image source={{ uri: selectedImage }} style={styles.fullScreenImage} />}
        </View>
      </Modal>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#c13584',
  },
  storyText: {
    fontSize: 12,
    marginTop: 5,
  },
  postContainer: {
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postLocation: {
    color: '#888',
  },
  postImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  postActions: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  likes: {
    fontWeight: 'bold',
  },
  caption: {
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  time: {
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: width,
    height: height / 2,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;