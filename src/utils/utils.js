export const disableOnTrue = (flag) => {
    return {
        opacity: flag ? 0.15 : 1,
        pointerEvents: flag ? "none" : "initial"
    }
}

export const buttonDisableStyleOnTrue = (disabled) => {
    return {
        backgroundColor: disabled ? 'rgb(100, 100, 100)' : '#E0E0E0'
    }
}