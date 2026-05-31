function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let i
        str_fin = str[0]
        for(i = 1; i < maxlength - 1; i++) {
            str_fin = str_fin + str[i]
        }
    return (str_fin + '…');
    }
    else {
    return str;
    }
}
