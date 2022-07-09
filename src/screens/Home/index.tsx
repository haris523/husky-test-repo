import useTheme from 'hooks/useTheme'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
    const { theme } = useTheme()

    return (
        <View style={localStyles.container}>
            <Text style={{ color: theme.secondary }}>Home</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Home
