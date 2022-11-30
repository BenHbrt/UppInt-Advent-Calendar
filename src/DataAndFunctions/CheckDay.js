const checkDate = (number) => {
    // const today = new Date();
    const today = new Date("2022-12-01")
    if (number < today.getDate()) {
        return true
    } else {
        return false
    }
}
export default checkDate;