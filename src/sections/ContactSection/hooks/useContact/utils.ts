import { objectValidate } from "utils/joiHelper"
import { contactSchema } from "./schema"
import { ContactError, ContactForm } from "./types"

export const validate = (form: ContactForm) => {
    return objectValidate<ContactError>(
        {
            email: form.email.value,
            message: form.message.value,
        },
        contactSchema
    )
}

export const validateOnlyTouched = (form: ContactForm) => {
    const validationResult = validate(form)
    const onlyTouched = Object.keys(validationResult.errors).reduce<ContactError>((acc, curr) => {
        const path = curr as keyof ContactError
        if (form[path].touched) acc[path] = validationResult.errors[path]

        return acc
    }, {})
    return {
        valid: !!!Object.keys(onlyTouched).length,
        errors: onlyTouched,
    }
}
