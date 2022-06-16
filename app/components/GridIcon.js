import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class GridIcon extends React.Component {
  render() {
    const [gridView, setgridView] = React.useState("GridList");
    return (
      <View style={styles.container}>
       {/* <TouchableOpacity style={styles.button} onPress={() => console.log ("setgridView")}> */}
        <Image source={require("../../assets/grid.png")}
          style={{ width: 15, height: 15, resizeMode:"cover", tintColor: "lightgrey" }}
          />
          {/* </TouchableOpacity> */}
      </View>
    );
  }
}

// style={styles.button} onPress={() => console.log ("setgridView")}>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#859a9b',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
  });



