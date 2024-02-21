import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { setupPlayer, addTrack } from '../musicPlayerServices';

function App(): React.JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  async function setup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrack();
    }
    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  // Buffering
  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <Text>HII</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
