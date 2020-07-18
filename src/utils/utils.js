export const dimOnTrue = (flag) => {
    return {
        opacity: flag ? 0.15 : 1,
    }
}

export const buttonDisableStyleOnTrue = (disabled) => {
    return {
        backgroundColor: disabled ? 'rgb(100, 100, 100)' : '#E0E0E0'
    }
}