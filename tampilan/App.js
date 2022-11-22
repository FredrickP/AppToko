

import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Toolbar from './Toolbar';
import TampilanKategori from './TampilanKategori';
import TampilanProduk from './TampilanProduk';
import styles from './style';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { create } from 'apisauce';

const App  = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const baseUrl = "https://fe.dev.dxtr.asia";

  const [token, setToken] = useState("");

  useEffect(() => {

    // Memanggil API Login untuk mendapatkan token
    const api = create({
      baseURL: `${baseUrl}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    api.post('/api/login', {
      email: "john@dummy.id",
      password: "password"
    }).then(response => {
      setToken(response.data.token)
    }).catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.appStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'aliceblue'}
      />
      <Toolbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TampilanKategori token={token}/>
          <TampilanProduk token={token} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  
};

export default App;
