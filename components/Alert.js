import { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function Alert({ alertContent, isModalVisible, toggleModal, navigation }) {
  const prevNavigation = useNavigation();
  const prevRouteName = prevNavigation?.dangerouslyGetState()?.routes.slice(-2, -1)[0]?.name

  const { title, desc, rightBtn } = alertContent

  const navToAndPost = (where) => {
    navigation.navigate(where)
    
    // Post data

  }

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
        style={styles.modal}
        animationIn={"bounceIn"}
        animationOut={"bounceOut"}
      >
        <View style={styles.sheet}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <View style={styles.btnContainer}> 
            <TouchableOpacity onPress={() => toggleModal()} style={styles.btn} >
              <View><Text style={styles.btnText}>Cancel</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleModal(navToAndPost, prevRouteName)} style={styles.btn} >
              <View><Text 
                style={[
                  styles.btnText,
                  rightBtn === "Delete" && { color: 'red' },
                ]}
              >{rightBtn}</Text></View>
            </TouchableOpacity>          
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // 삭제 예정
  },
  modal: {
    flex: 1, 
    alignItems: 'center', 
  },
  sheet: {
    backgroundColor: 'white',
    width: 272,
    paddingTop: 16,
    borderRadius: 15,
    alignItems: 'center', 
    overflow: 'hidden'
  },
  title: {
    fontWeight: 700,
    fontSize: 17,
  },
  desc: {
    fontWeight: 400,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  btnContainer: {
    display: 'flex', 
    flexDirection: 'row',
    width: '100%',
  },
  btn: {
    flex: 1, 
    alignSelf: 'flex-end', 
    height: 45,
    borderWidth: 0.2,
    borderColor: '#5F5F5F',
    justifyContent: 'center', 
  },
  btnText: {
    color: '#007AFF',
    fontWeight: 500,
    fontSize: 17,
    textAlign: 'center', 
  },
});