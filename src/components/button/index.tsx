import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    margin: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#a15e1b',
  },
  text: {fontSize: 16},
});
export default Button;
