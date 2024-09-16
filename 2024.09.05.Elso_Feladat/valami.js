const évszakok = ['ősz','tél','tavasz','nyár']
function init() {
    document.getElementById('body').innerHTML = evszakok.map(v=>
        `div onclick="f('${v}')">${v}</div>`
    ).join("")
}