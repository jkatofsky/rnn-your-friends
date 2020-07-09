export const disableOnTrue = (flag) => {
    return {
        opacity: flag ? 0.25 : 1,
        pointerEvents: flag ? "none" : "initial"
    }
}
