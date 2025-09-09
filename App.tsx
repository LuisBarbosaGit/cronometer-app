import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Main } from './app/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />
      <Main/>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


