import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';

export default class InputAddCommentaire extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const { textContentType, onChangeText, placeholder, onSubmitEditing, onBlur } = this.props;
        const { secureTextEntry } = this.state;
        return (
            <View style={[styles.champ]}>

                <TextInput
                    ref={(ref) => {
                        this.refInput = ref
                    }}
                    onBlur={onBlur}
                    onSubmitEditing={onSubmitEditing}
                    style={[styles.textInputAddCommentaire]}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline={true}
                    numberOfLines={4}
                />


            </View>
        );
    }
}
