x = new Promise((a,b)=>{
    if (Math.random() > .1) {
        a(Math.round(Math.random()*100))
    } else {
        b("Hiba")
    }
})
x.then(console.log).catch(console.error)