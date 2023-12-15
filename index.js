function distanceFromHqInBlocks(blocknumber){
   if (blocknumber > 42)
    return blocknumber - 42
    else 
        return 42 - blocknumber
}
function distanceFromHqInFeet(blocknumber){
    return distanceFromHqInBlocks(blocknumber) * 264
}
function distanceTravelledInFeet(start, destination){
    if (start < destination)
        return (destination - start) * 264
    else 
        return (start - destination) * 264
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400)
        return 0;
    else if (distance > 400 && distance <= 2000)
        return .02 * (distance - 400)
    else if (distance < 2500)
        return 25;
    else if (distance > 2500)
        return "cannot travel that far";
}