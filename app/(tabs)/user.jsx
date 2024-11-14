import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity, Dimensions } from 'react-native';

const User = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Posts');

  const posts = [
    { id: '1', image: 'https://pbs.twimg.com/profile_images/1008650588697944064/2OghK9Sl_400x400.jpg', alt: 'Post 1' },
    { id: '2', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462076695_893099029412041_5979969627417236350_n.jpg?stp=dst-jpg_p2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGk1mKveSsE9rC1vLj-FOueo4FkXqW-AKmjgWRepb4Aqd5iwean2J1ERjgCx9VDjITdwxaCJtB8rrvSvLrGSqb_&_nc_ohc=RXrUiU3Ux1wQ7kNvgEOVlX-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Av8Hv1SHf-6CL2Iabc_vuuF&oh=03_Q7cD1QEeYVwCvvB4S6Ri54Foc4H8dR4zxy8FuVIACfVXU1wVHQ&oe=672BA956', alt: 'Post 2' },
    { id: '3', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/458250350_3795205704027509_4754258495208499528_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH2kfmnb5NKTJoyVL4_cDgtd90WJJjK9V533RYkmMr1XpP4yIiJQNE5fb2uTEIK4lIzGHNrpAjFrjdDcNoMZjqR&_nc_ohc=7cChbyu6SFwQ7kNvgGLEMeG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Au4XFjhFkRHoqvww_P2wrRe&oh=03_Q7cD1QHCfKLxnwN5Njk2DAKyvyNuY-xZ_x0DyxVlkc9FhoA2aw&oe=672BB0BC', alt: 'Post 3' },
    { id: '4', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456502571_883908669889434_4211742521473504883_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEyRTVkcxcifxlZ7S75ue0dflr7vtU4Ha1-Wvu-1TgdrTZlkwoFxiUWjEdot-5IpssiJkeyxJZiBMeAXL2Z5KEU&_nc_ohc=znh_iXsiZowQ7kNvgGk_W-M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Av-jviWd9TJuM4mskGnETwP&oh=03_Q7cD1QFpQ1zSrYNvPrSON5BQSUHZyFLKzTcFzaWVRjKFrbh4rw&oe=67136695', alt: 'Post 4' },
    { id: '5', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454645135_861129332179866_6594915692686346287_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFAC8dh9NfqQM4ldl1rXimIX6dVZDWDpChfp1VkNYOkKMwe7OKzq-OCAxRnoDvKPZOPX8824nWsYT_BBo-j11x0&_nc_ohc=get19BKaKYwQ7kNvgFi3tHg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=A2IH5psBBB7nniL3mPVqXbW&oh=03_Q7cD1QHUc9FWkvdQCTYRKt6ehy4u0ChuY3MAwhevsCz_f7lOsA&oe=67136E79', alt: 'Post 5' },
    { id: '6', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/457632955_1199845487908466_4409154986856765733_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEGSY1ucYaYEW3O4wJRuLQXCj8GpTapoKgKPwalNqmgqCEix4YOCAF90FkFfS8CwpHpgV5V5KBqtyfHKsLtg_TB&_nc_ohc=hKHd0-MSjtoQ7kNvgGP1w82&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=A_Qd7fC-Gf4tMcnIvFOwFzA&oh=03_Q7cD1QG4Nt312eZ2b63ZSZ8vCpxYACmYcqEHoIfSVA4S_ejpmA&oe=67137980', alt: 'Post 6' },
    { id: '7', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456842938_1674241766729264_8221080047617035467_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGWGHrj5OgQT-fHig5j4pnRTN-bk2MOp4JM35uTYw6ngr4-LyDAfosq0VZ1YrNJzkqlhUjCeP9iPRMNC_GNQcSs&_nc_ohc=M_foHp0FdiIQ7kNvgEmdUJI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG-w88T7XchapDAAyWUHvvGeRvf9Q59iz6wQqyN3Aryag&oe=6713699E', alt: 'Post 7' },
    { id: '8', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/457146621_1877385199449453_3057866961649320346_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGxy_E75VNGERItMFoyR1I537Nry9tBrnTfs2vL20GudCzPwIulaVzuIsBJookOImzka96ZqJ9pxSiazRGts9Jj&_nc_ohc=wwbKmBVgrmIQ7kNvgEhLwHP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Anj1zDWqyLQjRcUa0qYYBmD&oh=03_Q7cD1QE-O9WP-sR5nmGsWiQm_-42fBOFlRa5WgEm606vMc71ag&oe=671368AF', alt: 'Post 8' },
    { id: '9', image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454223443_527970266418999_5384744405164257898_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHOuyn4073BCAPDJrxoQi6szLfy5JO1GVPMt_Lkk7UZU4f26ZOM_bj-Zdtk7kmVv9EAX5sUMKHpcBvccWYpYDmw&_nc_ohc=_drVhEhUGVkQ7kNvgE44Une&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=Anj1zDWqyLQjRcUa0qYYBmD&oh=03_Q7cD1QElsPgLY0Osrzc1QUTpP1hPVKQ85fzXAlmwpdkqWl5HHw&oe=6713774E', alt: 'Post 1'},
  ];

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = (screenWidth - 32) / 3; // 3-column layout with spacing

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderHeader = () => (
    <>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://instagram.fceb3-1.fna.fbcdn.net/v/t51.2885-19/454368717_442478238781830_8639096213149549670_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fceb3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=dyuuw8XSWeMQ7kNvgG1YDq0&_nc_gid=56ef522c0b24470dbb749c365e3d5565&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDKfqG-M3_iqgG_WduZNQsJ-53GlFZl0OlE64n2J4ncUw&oe=670A11B9&_nc_sid=7a9f4b' }}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>JanKhalil</Text>
          <Text style={styles.profileHandle}>@jankhaaalil</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>9</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>130</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>143</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <Text style={styles.bioText}>I love sharing my photos.</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => handleTabChange('Posts')}>
          <Text style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}>Posts</Text>
        </TouchableOpacity>
      
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {activeTab === 'Posts' ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item.image)}>
              <Image
                source={{ uri: item.image }}
                style={[styles.galleryImage, { width: imageWidth, height: imageWidth }]}
                alt={item.alt}
              />
            </TouchableOpacity>
          )}
          style={styles.gallery}
        />
      ) : (
        <View style={styles.profileSection}>
          <Text style={styles.profileText}>This is the Tagged section where tagged posts will appear.</Text>
        </View>
      )}

      {/* Full-Screen Image Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullImage}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileDetails: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileHandle: {
    fontSize: 16,
    color: 'gray',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  bioText: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 20,
    color: 'black',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    fontSize: 16,
    paddingVertical: 8,
    color: 'gray',
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  gallery: {
    paddingHorizontal: 8,
  },
  galleryImage: {
    margin: 4,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  profileSection: {
    padding: 16,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 16,
    color: '#333',
  },
});

export default User;