function findHousing(housingToFind, housingList) {
    let i = 0;
    while (i < housingList.length) {
        if (housingList[i].toUpperCase() === housingToFind.toUpperCase()) {
         return [i , housingList[i]];
        }
        i++;
    }
    return null
}
