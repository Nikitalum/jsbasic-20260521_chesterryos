function ucFirst(str) {
    str_u = str.toUpperCase()[0] + str.substring(1)
    if (str.length < 1) {
        str_u = str
    }
    return str_u
}
