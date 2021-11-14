import { useCallback, useMemo, useState } from "react"
import { JoiResult } from "utils/joiHelper"
import { ContactForm, Results } from "./types"
import { validate, validateOnlyTouched } from "./utils"

const INITIAL_FORM: ContactForm = {
    email: { value: "", touched: false },
    message: { value: "", touched: false },
}

export function useContact() {
    const [contactForm, setContactForm] = useState<ContactForm>(INITIAL_FORM)
    const [formErrors, setFormErrors] = useState<JoiResult<ContactForm> & { dirty: boolean }>({
        valid: true,
        errors: {},
        dirty: false,
    })
    const [result, setResult] = useState<Results>()

    const handleChange = useCallback(
        (field: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setContactForm((prev) => {
                const newObject = {
                    ...prev,
                    [field]: { value: e.target.value, touched: true },
                }

                if (formErrors.errors[field] || formErrors.dirty) {
                    const validationResult = validateOnlyTouched(newObject)
                    handleDirtyFormErrors(validationResult)
                }
                return newObject
            })
        },
        [formErrors]
    )

    const handleDirtyFormErrors = (result: JoiResult<ContactForm>) => {
        setFormErrors((prev) => {
            if (prev.dirty) return { ...result, dirty: true }
            return { ...result, dirty: !result.valid }
        })
    }

    const onBlur = useCallback(() => {
        handleDirtyFormErrors(validateOnlyTouched(contactForm))
    }, [contactForm])

    const onSubmit = useCallback(async () => {
        setResult({ state: "loading" })
        // const validationResult = validate(contactForm)
        // handleDirtyFormErrors(validationResult)

        // if (validationResult.valid) {
        //     setResult({ state: "loading" })
        //     const result = await fetch("/api/email", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             email: contactForm.email.value,
        //             message: contactForm.message.value,
        //         }),
        //     })
        //     if (result.ok) {
        //         setResult({ state: "success" })
        //         setContactForm(INITIAL_FORM)
        //     } else setResult({ state: "error" })
        // }
    }, [validate, contactForm])

    return useMemo(
        () => ({ formErrors, response: result, onChange: handleChange, onSubmit, onBlur }),
        [formErrors, result, handleChange, onSubmit, onBlur]
    )
}
