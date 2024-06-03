const hex2RBG = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return {r, g, b}
}
console.log(hex2RBG("#a2f3b3"))
