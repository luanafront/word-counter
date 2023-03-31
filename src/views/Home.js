import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('WordCounter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de palavras</Text>
      <Button title="Entrar" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
