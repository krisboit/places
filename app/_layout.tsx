import React from "react";
import {Platform, useColorScheme} from 'react-native'
import { PaperProvider } from 'react-native-paper'
import {Stack} from 'expo-router'
import {StatusBar} from "expo-status-bar"

import {Themes, Colors} from '@/styles';

type Color = keyof typeof Colors.light
type Setting = {
    color: Color
    theme: 'light' | 'dark' | 'auto'
    language: 'auto'
  }

export default function Layout() {
    const colorScheme = useColorScheme()
    const [settings, setSettings] = React.useState<Setting>({
        theme: 'auto',
        color: 'default',
        language: 'auto',
      })

    return (
        <PaperProvider
          theme={
            Themes[
              settings.theme === 'auto' ? colorScheme ?? 'dark' : settings.theme
            ][settings.color]
          }
        >
          <Stack
            screenOptions={{
              animation: 'ios',
              header: (props) => (
                <></>
              ),
            }}
          >
            <Stack.Screen
              name="index"
              options={{ title: 'Map', presentation: 'modal' }}
            />
          </Stack>
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </PaperProvider>
      )
}