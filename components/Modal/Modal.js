import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../Button'
import Modal from 'react-native-modal';
import ModalDescription from './ModalDescription'
import ModalInputNum from './ModalInputNum'
import ModalInputText from './ModalInputText'

export default function TheModal({prop}) {
  const {isBottomModalOn, toggleBottomModal} = prop

  const desc = "desc"
  const btnText = "btnText"
  const inputCtgy = "multiNum" // or sigleNum, text
  const inputUnit = "kg" // or oz, ml, lbs, ft + in, cm

  return (
    <View>
      <Modal
        isVisible={isBottomModalOn}
        onBackdropPress={toggleBottomModal}
        style={styles.modal}
      >
        <View style={styles.modalSheet}>
          <ModalDescription text={desc} />
          <ModalInputNum />
          <ModalInputText />
          <Button title={"Save"} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalSheet: {
    backgroundColor: 'white',
    padding: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
