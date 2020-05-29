import React from 'react'
import { ActivityIndicator, View } from 'react-native'


export default function OverlayLoading(props) {
    const { isLoading } = props
    return isLoading ? (
        <View style={{ backgroundColor: '#507E96' }} >
            <ActivityIndicator size="large" color="#FFB347" animating={true} />
        </View>
    ) : null
}