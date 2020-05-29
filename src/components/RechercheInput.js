import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';

export default class RechercheInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

            search: '',


        };
    }



    render() {
        const { onChangeText, placeholder } = this.props;

        return (
            <View >

                <TextInput


                    style={styles.textRechercheInput}

                    placeholder={placeholder}

                    onChangeText={onChangeText}
                />


            </View>
        );
    }
}
