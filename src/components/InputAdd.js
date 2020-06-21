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
        const { textContentType, multiline, numberOfLines, onChangeText, placeholder, onSubmitEditing, onBlur } = this.props;
        const { secureTextEntry } = this.state;
        return (
            <View style={[styles.champ]}>

                <TextInput
                    ref={(ref) => {
                        this.refInput = ref
                    }}
                    onBlur={onBlur}
                    onSubmitEditing={onSubmitEditing}
                    style={[styles.textInputAddRecette]}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline={multiline}
                    numberOfLines={numberOfLines}

                />




            </View>
        );
    }
}
