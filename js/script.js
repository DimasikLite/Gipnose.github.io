let transformed = parseInt(document.querySelectorAll('span.redballs')[0].style.transform.match(/\d+/))
let scaled = 0.5
let rotatedSpirius = 0
const hz = 144
setInterval(() => {
    rotatedSpirius = rotatedSpirius - (360 / hz)
    if (rotatedSpirius <= (-360 * 5)) {
        rotatedSpirius = 0
        transformed = 1
        scaled = 0.5
    }

    transformed = transformed * Math.pow((0.0069774 * hz), 2) //0.00697722
    if (transformed < 15) {
        document.querySelectorAll('span.redballs')[0].style.display = 'none'
    } else {
        document.querySelectorAll('span.redballs')[0].style.display = 'block'
    }
    if (transformed < 436) {

        scaled = scaled * (1 + (0.4 / hz))
        document.querySelectorAll('span.redballs')[0].style.transform = 'translateX(' + (transformed - 7) + 'px) ' + 'scale(' + scaled + ')'
        document.querySelectorAll('img')[0].style.transform = 'rotate(' + rotatedSpirius + 'deg)'
        document.querySelectorAll('div.balls')[0].style.transform = 'rotate(' + -rotatedSpirius + 'deg)'

    } else {
        transformed = 1
        scaled = 0.5
    }
    return transformed, scaled, rotatedSpirius
}, ((5000 / hz)))