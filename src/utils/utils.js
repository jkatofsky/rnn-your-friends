export const dimOnTrue = (flag) => {
    return {
        opacity: flag ? 0.15 : 1,
    }
}

export const disableOnTrue = (flag) => {
    return {
        pointerEvents: flag ? 'none' : 'initial'
    }
}