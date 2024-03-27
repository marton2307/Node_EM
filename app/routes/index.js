const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter= `${__dirname}`
//fs.openSync(parseInt(__dirname, 10)

const removeExtension = (fileName) =>{
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index', 'test'].includes(fileWithOutExt) // Excluir 'test' del conjunto de archivos a requerir
    if(!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
        console.log('Cargar Ruta--->', fileWithOutExt)
    }
}) 

router.get('*',(req, res)=> {
    res.status(404)
    res.send({ error: 'Not foud' })

})

module.exports=router  


/* fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if(!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
        console.log('Cargar Ruta--->', fileWithOutExt)
    }
    
})  */