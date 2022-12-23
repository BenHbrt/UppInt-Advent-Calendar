const checkDate = (number) => {
    // const today = new Date();
    // const today = new Date("2022-12-06")
    const today = new Date("2022-12-25")
    if (number < today.getDate()) {
        return true
    } else {
        return false
    }
}
export default checkDate;