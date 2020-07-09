export const disableOnTrue = (flag) => {
    return {
        opacity: flag ? 0.15 : 1,
        pointerEvents: flag ? "none" : "initial"
    }
}
