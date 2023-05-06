import { ScrollView, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Stack, Link } from 'expo-router'
import SignIn from "../components/signin/signIn";
import { COLORS, SIZES } from '../constants';
import React, { useState, useEffect } from 'react';
import AccountScreen from "../components/accounts/AccountScreen";
import StockMarketTab from "../components/stockmarket/StockMarket";
import Tabs from "../components/jobdetails/tabs/Tabs";
import Bank from "../src/Bank";
import CreateNewUser from "../components/signin/createNewUser";


const tabs = ["Accounts", "Transfer", "Stock Market", "Loans", "Sign out"];

const JobDetails = () => {
  // const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [showCreateNewUser, setShowCreateNewUser] = useState(false);

  const ceriseBank = new Bank(1234);

  useEffect(() => {
    // Fetch the list of accounts from your database or API
    const accounts = [
      { id: 1, name: 'Checking', balance: '$1,000.00' },
      { id: 2, name: 'Savings', balance: '$5,000.00' },
      { id: 3, name: 'Credit Card', balance: '$-500.00' },
    ];
    setAccounts(accounts);
  }, []);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Accounts":
        return <AccountScreen
          title="Accounts" />
      case "Stock Market":
        return <StockMarketTab
          title="Stock Market"
        />
      case "Sign out":
        return setIsSignedIn(false)
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      {isSignedIn ? (
        <ScrollView showsVerticalScrollIndicator={false}
        >
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <View style={{ flex: 1, height: "100%", overflow: "scroll" }}>
              <View style={{ flexGrow: 1 }}>
                {displayTabContent()}
              </View>
            </View>
            <View style={{ position: "relative", height: "100%" }}>
              <View style={{ position: "sticky", bottom: 0 }}>
                <Tabs
                  tabs={tabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={{ backgroundColor: COLORS.primary }}>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: "Welcome to your bank", headerStyle: { backgroundColor: COLORS.red }, headerTitleStyle: { fontSize: 30, color: COLORS.white } }} />
            <SignIn Bank={ceriseBank} onSignIn={setIsSignedIn} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>

              <TouchableOpacity onPress={() => setShowCreateNewUser(true)}>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Arial', textAlign: 'center' }}>New user? Create an account</Text>
              </TouchableOpacity>
            </View>
            {showCreateNewUser && (
            <CreateNewUser Bank={ceriseBank} created = {setShowCreateNewUser}/>
          )}
          </View>
        </ScrollView>
      )}

    </SafeAreaView>
  )
}

export default JobDetails

