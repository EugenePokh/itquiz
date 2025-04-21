import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CropsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/logo_app.png')} style={styles.logo} />

        <Text style={styles.title}>ИТ КОНФЕРЕНЦИЯ – КОД РОСТА 2025</Text>

        <Text style={styles.description}>
          Пройдите ИТ-тест и получите доступ к исходному коду внутренних компонентов:
        </Text>
        <Text style={styles.bonus}>
          🔓 Портал + ИИ модель для поиска по регламентам{'\n'}
          📌 Пример: "Каким образом осуществляется платеж?" → ссылка на регламент
        </Text>

        <View style={styles.rulesBlock}>
          <Text style={styles.rulesTitle}>📋 Условия прохождения теста:</Text>
          <Text style={styles.rule}>• Тест состоит из 10 вопросов</Text>
          <Text style={styles.rule}>• Необходимо правильно ответить на минимум 7</Text>
          <Text style={styles.rule}>• На каждый вопрос даётся 30 секунд</Text>
          <Text style={styles.rule}>• Повторное прохождение разрешено</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('itquiz_test')}>
          <Text style={styles.buttonText}>Начать тест</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  bonus: {
    fontSize: 14,
    color: '#d3f8ff',
    textAlign: 'center',
    marginVertical: 10,
  },
  rulesBlock: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    width: '100%',
  },
  rulesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  rule: {
    fontSize: 14,
    color: 'white',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#34c759',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: 'white',
    marginTop: 20,
  },
});

export default CropsScreen;
