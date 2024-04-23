import Axios from "axios";

export function recaptchaModel() {
    const validateCaptcha = async function (token) {
        const response = await Axios.post("/recaptcha-verify", { token })

        if (response.data == 'success') {
            return true
        }

        return false
    }

    return {
        validateCaptcha
    }
}
