import useTheme from 'hooks/useTheme'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler'
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle
} from 'react-native-reanimated'

const Home = () => {
    const { theme } = useTheme()
    const xVal = useSharedValue(0)
    const yVal = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { x: number; y: number }
    >({
        onStart: (evt, ctx) => {
            ctx.x = xVal.value
            ctx.y = yVal.value
        },
        onActive: (evt, ctx) => {
            xVal.value = evt.translationX + ctx.x
            yVal.value = evt.translationY + ctx.y
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: xVal.value }, { translateY: yVal.value }]
    }))
    return (
        <View style={localStyles.container}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={animatedStyle}>
                    <Animated.Text style={[{ color: theme.secondary }]}>
                        Home
                    </Animated.Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: '#1A72A5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Home
