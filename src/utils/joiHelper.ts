import JoiResult from "joi"

export type JoiResult<T extends {}> = {
    valid: boolean
    errors: Partial<Record<keyof T, string>>
}

export function objectValidate<T extends {}>(
    data: T,
    schema: JoiResult.Schema,
    options?: JoiResult.ValidationOptions
): JoiResult<T> {
    const { error } = schema.validate(data, { abortEarly: false, ...options })

    if (!error) return { valid: true, errors: {} }
    return error.details.reduce<JoiResult<T>>((acc, curr) => {
        const path = curr.path.join(".") as keyof T
        acc.errors[path] = curr.message
        return acc
    }, { valid: false, errors: {} })
}
