import React, {Component} from 'react'
import {View, TextInput} from "react-native"

const UselessTextInput = (props) => {
    return(
        <TextInput {...props} maxLength={40} />
    )
}

const UselessTextInputMultiline = () => {
    const [value, onChangeText] = React.useState("พิมพ์ข้อความที่นี่");

    return(
        <View style={{
            backgroundColor: value,
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
        }}>
            <UselessTextInput multiline numberOfLines={4} onChangeText={text=>onChangeText(text)} value={value}></UselessTextInput>
        </View>
    )
}

export default UselessTextInputMultiline;