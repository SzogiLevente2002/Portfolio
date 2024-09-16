var b1 = []
function refresh() {
    document
    .querySelector('#output')
    .innerHTML = 
    b1.map((elem,i) => {
        [t,p] = elem
        return `
            <div class = "x${i % 2} y${p}">7
            ${t}
            <span onclick = "g('${i}')">/<span>
            <span onclick = "del('${t}')">/<span>
            </div>
            `


    }).join('')
}
function f(e) {
    b1.push([e.value,0])
    b1.sort()
    e.value = ''
    refresh()
}
function g(i) {
    b1[i][1] = b1[i][1] == 0 ? 1 : 0
    refresh()
}
function del(e) {
    b1 = b1.filter(v => v[0] != e)
    refresh()
}














