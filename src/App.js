import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Layout from './components/Layout';
import Main from './components/Main';
import Card from './components/Card';


function App() {
  return (
    <Layout>
      <Card/>
    </Layout>
  );
}

export default App;
