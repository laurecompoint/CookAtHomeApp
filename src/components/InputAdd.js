import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';

export default class InputAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const { defaultValue, style, multiline, numberOfLines, onChangeText, placeholder, onSubmitEditing, type } = this.props;
        return (
            <View style={[styles.champ]}>

                <TextInput
                    ref={(ref) => {
                        this.refInput = ref
                    }}
                    onSubmitEditing={onSubmitEditing}
                    style={style}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline={multiline}
                    type={type}
                    numberOfLines={numberOfLines}
                    defaultValue={defaultValue}

                />




            </View>
        );
    }
}
