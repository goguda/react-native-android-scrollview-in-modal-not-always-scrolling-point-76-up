/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import ScrollableModalContent from './ScrollableModalContent';

function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <Modal
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
        animationType="slide">
        <ScrollableModalContent />
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.btnText}>
          {'Open (what should be a) Scrollable Modal'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 4,
  },
});

export default App;
