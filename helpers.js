

function successfullMessage(msg) {
    return "β *mafia*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *mafia*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *mafia*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
