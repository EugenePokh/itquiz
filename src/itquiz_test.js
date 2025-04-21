import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Modal, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const questions = [
  {
    question: 'Выберите один из признаков объектно-ориентированного программирования',
    options: ['Наследование', 'Сортировка', 'Компиляция', 'Циклы'],
    answer: 0,
  },
  {
    question: 'Что означает аббревиатура ИИ?',
    options: ['Интеллектуальный Интернет', 'Искусственный интеллект', 'Информатика и инженерия', 'Информационный индекс'],
    answer: 1,
  },
  {
    question: 'Какой алгоритм чаще всего используется в языковых моделях?',
    options: ['Деревья решений', 'Регрессия', 'Градиентный бустинг', 'Трансформер'],
    answer: 3,
  },
  {
    question: 'Что делает модель LM?',
    options: ['Управляет логикой', 'Генерирует изображения', 'Предсказывает текст', 'Компрессирует данные'],
    answer: 2,
  },
  {
    question: 'Какой язык чаще всего используется в ML?',
    options: ['Python', 'C++', 'Java', 'HTML'],
    answer: 0,
  },
  {
    question: 'Какой компонент является ядром нейросети?',
    options: ['Браузер', 'Сервер', 'Нейрон', 'Файл'],
    answer: 2,
  },
  {
    question: 'Что такое overfitting?',
    options: ['Хорошее обучение', 'Обучение на устаревших данных', 'Переобучение', 'Недообучение'],
    answer: 2,
  },
  {
    question: 'Как называется слой, "понимающий" контекст в Transformer?',
    options: ['Dropout', 'Normalization', 'Self-Attention', 'Pooling'],
    answer: 2,
  },
  {
    question: 'GPT — это:',
    options: ['Сервер', 'Алгоритм сортировки', 'Генеративная языковая модель', 'Язык программирования'],
    answer: 2,
  },
  {
    question: 'Какой фреймворк для ИИ от OpenAI?',
    options: ['TensorFlow', 'Torch', 'Keras', 'GPT'],
    answer: 3,
  },
];

const QuizScreen = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [win, setWin] = useState(false);
  const [timer, setTimer] = useState(30);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateCard();
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleNext(null);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [current]);

  const animateCard = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleNext = (option) => {
    if (option === questions[current].answer) {
      setCorrect((prev) => prev + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTimer(30);
    } else {
      setShowModal(true);
      setWin(correct + (option === questions[current].answer ? 1 : 0) >= 7);
    }
  };

  const restart = () => {
    setCurrent(0);
    setCorrect(0);
    setSelected(null);
    setTimer(30);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>⏱ {timer} сек</Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.question}>{questions[current].question}</Text>
        {questions[current].options.map((opt, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.option,
              selected === idx && { backgroundColor: '#ccc' },
            ]}
            onPress={() => {
              setSelected(idx);
              setTimeout(() => handleNext(idx), 300);
            }}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{win ? '🎉 Вы выиграли!' : '😞 Попробуйте еще раз'}</Text>
            {win && (
              <Image source={require('../assets/qr-code.gif')} style={styles.logo} />
            )}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                if (win) {
                  Linking.openURL('https://github.com/RostAgroDevTeam/RegulaSearch');
                } else {
                  restart();
                }
              }}
            >
              <Text style={styles.modalButtonText}>{win ? 'Перейти' : 'Начать сначала'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f172a',
    flex: 1,
    justifyContent: 'center',
  },
  timer: {
    fontSize: 18,
    color: 'white',
    textAlign: 'right',
    marginBottom: 10,
  },
  question: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#f1f5f9',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 15,
    color: '#0f172a',
  },
  modalButton: {
    backgroundColor: '#0f172a',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    width: 200,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
});

export default QuizScreen;
