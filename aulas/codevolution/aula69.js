import { 
    SafeAreaView, 
    StyleSheet, 
    StatusBar, 
    View,
    Text, 
    ActivityIndicator,
    FlatList } from "react-native";
  import { useState, useEffect } from "react";
  
  export default function App() {
  
    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
  
    const fetchData = async (limit = 10) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json()
      setPostList(data)
      setIsLoading(false);
    }
  
    const handleRefresh = () => {
      setRefreshing(true)
      fetchData(20)
      setRefreshing(false)
    }
  
    useEffect(() => {
      fetchData();
    }, []);
    
    if (isLoading) {
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color='#0000ff'/>
          <Text>Loading...</Text>
        </SafeAreaView>
      )
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <View style={styles.listContainer}>
          <FlatList 
          data={postList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )
          }}
          ItemSeparatorComponent={() => (
            <View style={{height: 16}}/>
          )}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: StatusBar.currentHeight
    },
    listContainer: {
      flex: 1,
      paddingHorizontal: 16,
  
    },
    card: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
    titleText: {
      fontSize: 30
    },
    bodyText: {
      fontSize: 24,
      color: '#666666'
    },
    headerText: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 12,
      fontWeight: 'bold'
    },
    footerText: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 12,
      marginBottom: 12
    },
    loadingContainer: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })