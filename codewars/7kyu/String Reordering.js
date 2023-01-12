function sentence(list) {
    let result = ''
    list
    .sort((a,b) => Object.keys(a) - Object.keys(b))
    .forEach(item => result += Object.values(item) + ' ')
    return result.slice(0, -1)
}