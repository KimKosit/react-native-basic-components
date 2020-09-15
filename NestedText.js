import React from 'react'
import {Text, StyleSheet, View} from "react-native"

const BoldAndBeautiful = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.baseText}>I am bold</Text>
            <Text style={styles.innerText}>and red</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontWeight: "bold",
    },
    innerText: {
        color: 'red',
    },
})

export default BoldAndBeautiful