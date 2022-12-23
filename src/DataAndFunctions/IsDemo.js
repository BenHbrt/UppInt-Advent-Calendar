const isDemo = () => {
    const today = new Date()
    if (today.getMonth() === 11 && today.getDate() <= 25) {
        return false
    } else {
        return true
    }
}
export default isDemo