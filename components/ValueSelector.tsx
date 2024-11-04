import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';

interface ValueSelectorProps {
  onSelect: (value: number) => void;
}

const values = [0, 10, 11, 20, 21, 22];

const imageMap: { [key: number]: any } = {
  0: require('../assets/images/values/0.png'),
  10: require('../assets/images/values/10.png'),
  11: require('../assets/images/values/11.png'),
  20: require('../assets/images/values/20.png'),
  21: require('../assets/images/values/21.png'),
  22: require('../assets/images/values/22.png'),
};

export function ValueSelector({ onSelect }: ValueSelectorProps) {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <ThemedView style={styles.container}>
      {values.map((value) => (
        <TouchableOpacity key={value} onPress={() => handleSelect(value)}>
          <Image
            source={imageMap[value]}
            style={[
              styles.image,
              selectedValue === value && styles.selectedImage,
            ]}
          />
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
  selectedImage: {
    borderColor: 'blue',
    borderWidth: 2,
  },
});
