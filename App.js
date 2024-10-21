import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import TodoList from './components/TodoList';
export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
      >
         <View style={styles.card}>
          <TodoList />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E8ECEF',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    marginVertical: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    width: '92%',
  },
});