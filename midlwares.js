import colors from 'colors'

export function requestTime(req, res, next){
    req.requestTime = Date.now()

    next()
    //it is function for go to next midleware
}

export function logger(req, res, next){
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
    next()
}