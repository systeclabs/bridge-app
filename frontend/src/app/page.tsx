"use client"

import { useEffect, useState } from "react";
import Card from "./components/molecules/Card";
import { ethers } from "ethers";

export default function Home() {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState<string>();

  useEffect(() => {
    // Connect to Binance Smart Chain (Mainnet)
    const bscMainnetProvider = new ethers.providers.JsonRpcProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );

    // Set provider
    setProvider(bscMainnetProvider);

    // Perform wallet-related operations
    async function getAccount() {
      if (bscMainnetProvider) {
        const accounts = await bscMainnetProvider.listAccounts();
        setAccount(accounts[0]);
      }
    }
  }, []);

  // Handle transaction
  async function handleTransaction() {
    if (!provider || !account) {
      console.error("Provider or account not available");
      return;
    }

    // Example: Transfer BNB to another address
    const signer = provider.getSigner();
    const recipientAddress = "0xRecipientAddress"; // Replace with recipient's address
    const amount = ethers.utils.parseEther("0.1"); // Amount in Ether

    try {
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: amount,
      });

      // Transaction hash
      console.log("Transaction sent:", tx.hash);
    } catch (error) {
      console.error("Error sending transaction:", error.message);
    }
  }

  return (
    <>
      <Card task={{}} />
      <h1>Interaction with Binance Smart Chain</h1>
      <p>Current account: {account}</p>
      <button onClick={handleTransaction}>Send Transaction</button>
    </>
  );
}