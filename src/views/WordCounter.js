import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import countWords from './util';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordsCounteds, setWordsCounteds] = useState([]);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const showWordsCounteds = () => {
    const newWordsCounteds = countWords(text);
    let wordsToShow = [];
    for (let word in newWordsCounteds) {
      const count = newWordsCounteds[word];
      const phrase = `${word}: ${count}`;

      wordsToShow = [...wordsToShow, phrase];
    }
    setWordsCounteds(wordsToShow);
  };

  return (
    <View style={styles.container}>
      <Button title="Voltar" onPress={handlePress} />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Digite seu texto aqui"
        placeholderTextColor="#ccc"
        multiline
      />
      <Button title="Contar palavras" onPress={showWordsCounteds} />
      {wordsCounteds.map((item, index) => {
        return (
          <Text key={index} style={styles.wordCounted}>
            {item}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  wordCounted: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default WordCounter;
