import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function PasswordStrength () {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    
    const calculateStrength = (password: string) => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[&#@$£µ*!?%]/.test(password)) score++;
        return score;
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        setStrength(calculateStrength(text));
    };

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.passwordInput}
                placeholder='Enter your password'
                placeholderTextColor={'#c5c3c2'}
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry
            />
            <Text style={styles.textStyle}>Password Strength: {strength}/4</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    passwordInput: {
        width: 150,
        height: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#c5c3c2',
    },
    textStyle: {
        fontSize: 20,
        color: '#333',
    }
});