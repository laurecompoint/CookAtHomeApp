import React from 'react'
import { View, Text } from 'react-native'


export default function (props) {
    const { message } = props
    return message ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>{message}</Text>
        </View>
    ) : null
}