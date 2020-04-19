

const filterFn = require('./my-module.js')
const directory = process.argv[2]
const extension = process.argv[3]
filterFn(directory, extension, function (err, list){
    if (err){
        console.log('there was an error:', err)
    }
    list.forEach(function(file){
        console.log(file)
    })
})