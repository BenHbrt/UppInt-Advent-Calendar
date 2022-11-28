import dayData from "./DayData";

const dayShuffle = () => {
    const data = [[],[],[],[]]
    dayData.forEach(day => {
        let addToArray = false
        while (addToArray === false) {
            const row = Math.floor(Math.random() * 4)
            if (data[row].length < 6) {
                data[row].push(day)
                addToArray = true
            }
        }
    
    })
    return data
}
export default dayShuffle;