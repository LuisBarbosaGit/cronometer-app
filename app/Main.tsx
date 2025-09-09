import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'



export const Main = () => {
    const [time, setTime] =  useState<number>(0.0);
    const [isTimer, setIsTimer] = useState<NodeJS.Timeout | null>(null);
    

    function handleTimeClick() {
       if (!!!isTimer) {
        const timeout = setInterval(() => {
            setTime(prevState => prevState + 0.1);
        }, 100);
        setIsTimer(timeout);
       }
       else{
        clearInterval(isTimer);
        setIsTimer(null)
       }
    }

    function handleResetClick() {
        setTime(0.0);
        if(isTimer) {
            clearInterval(isTimer);
            setIsTimer(null);
        }
    }

    return (
        <View style={styles.container}>
            <Image 
            source={require('./public/cronometro.png')}
            style={{width:260, height: 320, marginTop: -120}}
            />

            <Text style={styles.timerText}>{time.toFixed(1)}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleTimeClick}><Text style={styles.buttonText}>{!!!isTimer ? 'Start' : 'Stop'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleResetClick}><Text style={styles.buttonText}>Restart</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: '#00aeef'
    },
    timerText:{
        fontSize: 80,
        marginTop: -190,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 120,
    },
    button :{
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        width: 120,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})