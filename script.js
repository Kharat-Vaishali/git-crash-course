console.log('Second File')


let label = [
    {time:1000,label:'one'},
    {time:2000,label:'two'},
    {time:3000,label:'three'},
    {time:4000,label:'four'},
    {time:5000,label:'five'},
]

for(let i=0;i<label.length;i++){
    setTimeout(()=>{
        console.log(`the function is executed after ${label[i].label} second`)
    },label[i].time)
}