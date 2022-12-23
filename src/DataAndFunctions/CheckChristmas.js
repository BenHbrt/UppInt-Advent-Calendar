const checkChristmas = (date) => {
    if (date.includes("25 Dec")) {
        return "Christmas"
    } else {
        return "Calendar"
    }
}
export default checkChristmas