export interface ContactForm {
    email: { value: string; touched: boolean }
    message: { value: string; touched: boolean }
}

export type ContactError = Partial<Record<keyof ContactForm, string>>

interface ResultLoading {
    state: "loading"
}
interface ResultError {
    state: "error"
}
interface ResultSuccess {
    state: "success"
}
export type Results = ResultLoading | ResultSuccess | ResultError
