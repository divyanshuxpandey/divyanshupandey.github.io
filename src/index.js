import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRegistry } from 'react-native-web';
import App from './App';

AppRegistry.registerComponent('App', () => App);

const { getApplication } = AppRegistry;
const { element } = getApplication('App');

const rootTag = document.getElementById('root');
const root = createRoot(rootTag);
root.render(element);
