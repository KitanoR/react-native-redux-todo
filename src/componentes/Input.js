import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChange, value, onSubmit }) => {
    return (
        <TextInput 
            style={styles.input}
            onSubmitEditing={onSubmit}
            onChangeText={onChange}
            value={value}
            />
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height: 34,
        alignSelf: 'stretch',
        padding: 8,
        margin: 10,
        borderRadius: 10
    }
})