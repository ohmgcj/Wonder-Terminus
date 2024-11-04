import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Button, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ValueSelector } from '@/components/ValueSelector'; // Import do seu componente personalizado
import { equationOne, equationTwo, equationThree } from '../../functions/equations';

function HomeScreen() {
  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [z, setZ] = useState<number | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedVariable, setSelectedVariable] = useState<'X' | 'Y' | 'Z' | null>(null);

  const imageMap: { [key: number]: any } = {
    0: require('../../assets/images/values/0.png'),
    10: require('../../assets/images/values/10.png'),
    11: require('../../assets/images/values/11.png'),
    20: require('../../assets/images/values/20.png'),
    21: require('../../assets/images/values/21.png'),
    22: require('../../assets/images/values/22.png'),
  };

  const openSelectorModal = (variable: 'X' | 'Y' | 'Z') => {
    setSelectedVariable(variable);
    setModalVisible(true);
  };

  const handleValueSelect = (value: number) => {
    if (selectedVariable === 'X') setX(value);
    if (selectedVariable === 'Y') setY(value);
    if (selectedVariable === 'Z') setZ(value);
    setModalVisible(false);
  };

  const calculateResults = () => {
    if (x !== null && y !== null && z !== null) {
      const result1 = equationOne(x);
      const result2 = equationTwo(z, y);
      const result3 = equationThree(y, z, x);
      return { result1, result2, result3 };
    }
    return null;
  };

  const results = calculateResults();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <ThemedText style={styles.label}>X Symbol:</ThemedText>
          <TouchableOpacity style={styles.selector} onPress={() => openSelectorModal('X')}>
            {x !== null ? (
              <Image source={imageMap[x]} style={styles.symbolImage} />
            ) : (
              <ThemedText style={styles.symbolText}>X</ThemedText>
            )}
            <ThemedText style={styles.selectText}>Tap to select symbol</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <ThemedText style={styles.label}>Y Symbol:</ThemedText>
          <TouchableOpacity style={styles.selector} onPress={() => openSelectorModal('Y')}>
          {y !== null ? (
              <Image source={imageMap[y]} style={styles.symbolImage} />
            ) : (
              <ThemedText style={styles.symbolText}>Y</ThemedText>
            )}
            <ThemedText style={styles.selectText}>Tap to select symbol</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <ThemedText style={styles.label}>Z Symbol:</ThemedText>
          <TouchableOpacity style={styles.selector} onPress={() => openSelectorModal('Z')}>
          {z !== null ? (
              <Image source={imageMap[z]} style={styles.symbolImage} />
            ) : (
              <ThemedText style={styles.symbolText}>Z</ThemedText>
            )}
            <ThemedText style={styles.selectText}>Tap to select symbol</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {results ? (
        <View style={styles.resultContainer}>
          <ThemedText style={styles.resultText}>{results.result1}</ThemedText>
          <ThemedText style={styles.resultText}>{results.result2}</ThemedText>
          <ThemedText style={styles.resultText}>{results.result3}</ThemedText>
        </View>
      ) : (
        <ThemedText style={styles.resultText}>Selecione todos os valores para ver os resultados.</ThemedText>
      )}

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ThemedText style={styles.modalTitle}>Select a value for {selectedVariable}</ThemedText>
            <ValueSelector onSelect={handleValueSelect} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  selector: {
    width: '100%',
    backgroundColor: '#111',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  symbolText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  symbolImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  selectText: {
    fontSize: 12,
    color: '#888',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#242627',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 30,
    lineHeight: 36,
    color: 'white',
    flexWrap: 'wrap',
    padding: 5
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
