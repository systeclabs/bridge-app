"use client"
import Card from "./components/molecules/Card"

export default function Home() {
  return (
    <>
      <Card task={{ id: 12, title: 'hello'}}/>
      <h1>Interaction with Binance Smart Chain</h1>
    </>
  );
}