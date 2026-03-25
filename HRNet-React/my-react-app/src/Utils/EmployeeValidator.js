
/*US zip code: 12345 or 12345-1234. No letter*/
export const regex = {
    textOnly: /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/,
    street: /^[A-Za-z0-9À-ÿ\s,'-]{2,80}$/,
    zipCode: /^\d{5}(-\d{4})?$/
}

/*Types of regex for createEmployee form fields*/
export const regexInputType = {
    firstName: {
        type: regex.textOnly,
        message: "Invalid first name"
    },
    lastName: {
        type: regex.textOnly,
        message: "Invalid last name"
    },
    street: {
        type: regex.street,
        message: "Invalid street name"
    },
    city: {
        type: regex.textOnly,
        message: "Invalid city name"
    },
    zipCode: {
        type: regex.zipCode,
        message: "Invalid zip code"
    }
}

export const regexValidationLogic = (value, type) => {
    return type.test((value || "").trim())
}

export const formInputValidation = (formData) => {
    const error = {}

    for (const field in regexInputType) {
        const rule = regexInputType[field]
        const value = formData[field]

        if (!regexValidationLogic(value , rule.type)) {
            error[field] = rule.message
        }
    }

    return error
}

