import {useImmer} from "use-immer"
import Axios from "axios";

export function userRegisterModel() {
    const [userState, setUserState] = useImmer({
        username: {
            value: "",
            hasErrors: false,
            message: ""
        },
        email: {
            value: "",
            hasErrors: false,
            message: ""
        },
        password: {
            value: "",
            hasErrors: false,
            message: ""
        },
        isSaving: false
    })

    const notifyCreateUserRequiredIfPostFieldsAreValid = function (captchaRef) {
        validateUsername(userState.username.value)
        validateEmail(userState.email.value)
        validatePassword(userState.password.value)
    }

    const hasRegistrationInputReady = function () {
        return (userState.username.value!='' && !userState.username.hasErrors)
         && (userState.email.value!='' && !userState.email.hasErrors)
         && (userState.password.value!='' && !userState.password.hasErrors)
    }

    const createUser = async function () {
        validateUsername(userState.username.value)
        validateEmail(userState.email.value)
        validatePassword(userState.password.value)
        const response = await Axios.post("/register", { username: userState.username.value, email: userState.email.value, password: userState.password.value })
        //const response = await Axios.post("http://localhost:8080/register", { username: "herve555", email: "herve555@test.com", password: "myptrLKteU1ssw0rd" })
        return response
    }

    const setUsername = function (value) {
        setUserState(draft => {
            draft.username.value = value
        })
    }

    const validateUsername = function (value) {
        if (value.trim() == '') {
            setUserState(draft => {
                draft.username.hasErrors = true
                draft.username.message = "The username cannot be blank"
            })
        } else {
            setUserState(draft => {
                draft.username.hasErrors = false
                draft.username.message = ""
            })
        }
    }

    const hasUsernameError = function () {
        return userState.username.hasErrors
    }

    const getUsernameMessage = function () {
        return userState.username.message
    }

    const setEmail = function (value) {
        setUserState(draft => {
            draft.email.value = value
        })
    }

    const validateEmail = function (value) {
        if (value.trim() === '') {
            setUserState(draft => {
                draft.email.hasErrors = true
                draft.email.message = "The email cannot be blank"
            })
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            setUserState(draft => {
                draft.email.hasErrors = true
                draft.email.message = "The email needs to be a valid email"
            })
        } else {
            setUserState(draft => {
                draft.email.hasErrors = false
                draft.email.message = ""
            })
        }
    }

    const hasEmailError = function () {
        return userState.email.hasErrors
    }

    const getEmailMessage = function () {
        return userState.email.message
    }

    const setPassword = function (value) {
        setUserState(draft => {
            draft.password.value = value
        })
    }

    const validatePassword = function (value) {
        if (value.trim() === '') {
            setUserState(draft => {
                draft.password.hasErrors = true
                draft.password.message = "The password cannot be blank"
            })
        } else if (value.trim().length <= 12) {
            setUserState(draft => {
                draft.password.hasErrors = true
                draft.password.message = "The minimum length for the password is 12 characters"
            })
        } else {
            setUserState(draft => {
                draft.password.hasErrors = false
                draft.password.message = ""
            })
        }
    }

    const hasPasswordError = function () {
        return userState.password.hasErrors
    }

    const getPasswordMessage = function () {
        return userState.password.message
    }

    return {
        createUser,
        notifyCreateUserRequiredIfPostFieldsAreValid,
        setUsername,
        validateUsername,
        hasUsernameError,
        getUsernameMessage,
        hasEmailError,
        setEmail,
        validateEmail,
        getEmailMessage,
        setPassword,
        validatePassword,
        hasPasswordError,
        getPasswordMessage,
        hasRegistrationInputReady
    }
}