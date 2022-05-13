import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = {
    isLogin: '@IS_LOGIN'
}

export const setUserLogin = async () => {
    try {
        await AsyncStorage.setItem(KEY.isLogin, "true")
    }
    catch (e) {
        alert('login userdata not saved:', e)
    }
}

export const getUserLogin = async () => {
    try {
        return await AsyncStorage.getItem(KEY.isLogin)
    }
    catch (e) {
        alert('login userdata not geted:', e)
    }
}

export const removeUserLogin = async () => {
    try {
        return await AsyncStorage.removeItem(KEY.isLogin)
    }
    catch (e) {
        alert('login userdata not remove:', e)
    }
}

