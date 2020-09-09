
module.exports.getDate = () => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return new Date().toLocaleDateString("en-US", options)
}


module.exports.getDay = () => {
    let options = {
        weekday: "long"
    }
    return new Date().toLocaleDateString("en-US", options)
}