const generateDate = () => {
    const today = new Date();
    if (today.getMonth() === 11 && today.getDate() <= 25) {
        return today
    } else {
        return new Date("2022-12-10")
    }
}
export default generateDate;