export const rupiah = (rp, strlength = 0, dot = false) => {
    var newRp = ''; var addon = '';
    rp = rp.toString()
    const rplength = rp.length

    if (rp === '' || rp === null) {
        return 'incorrect format'
    }

    if (rplength > 3) {
        if (dot === true) {
            if (rplength <= 6){
                var thousand = rp.slice(rplength - 3, rplength)
                var first = rp.slice(0, rplength - 3)

                newRp = first+'.'+thousand+',00'
            } else if (rplength <= 9){
                var thousand = rp.slice(rplength - 3, rplength)
                var hundred = rp.slice(rplength - 6, rplength - 3)
                var first = rp.slice(0, rplength - 6)

                newRp = first+'.'+hundred+'.'+thousand+',00'
            } else if (rplength <= 12) {
                var thousand = rp.slice(rplength - 3, rplength)
                var hundred = rp.slice(rplength - 6, rplength - 3)
                var million = rp.slice(rplength - 9, rplength - 6)
                var first = rp.slice(0, rplength - 9)

                newRp = first+'.'+million+'.'+hundred+'.'+thousand+',00'
            }
        } else {
            newRp = rp
        }
    } else {
        newRp = rp
    }

    if (strlength !== 0) {
        var a; var space = '\xa0';
        var temp;

        for(a = 1; a <= (strlength - rplength); a++) {
            addon = addon.concat(space)
        }
    } else {
        addon = ' '
    }
    
    const result = 'Rp '+addon+newRp
    return result
}

export const shortDate = (date = '1970-12-31') => {
    var dateSplit = date.split("-");
    var monthIndo = [
        "Jan", "Feb", "Mar", "Apr",
        "Mei", "Jun", "Jul", "Agu",
        "Sep", "Okt", "Nov", "Des"
    ]

    return dateSplit[2] + " " + monthIndo[dateSplit[1]-1] + " " + dateSplit[0];
}