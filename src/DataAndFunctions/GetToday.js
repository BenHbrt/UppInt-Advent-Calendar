const getToday = () => {
    const dayData = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // const dateObj = new Date()
    const dateObj = new Date("2022-12-06")
    let day = dateObj.getDay()
    let month = dateObj.getMonth()
    day = dayData[day]
    month = monthData[month]
    const date = dateObj.getDate()
    return (`${day} ${date} ${month}`)
}
export default getToday;