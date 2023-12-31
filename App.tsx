import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from "./src/theme";
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
