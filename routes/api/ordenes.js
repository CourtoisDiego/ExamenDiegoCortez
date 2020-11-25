let express = require('express');
let router = express.Router();

const OrdenesModelClass = require('../../models/ordenes/ordenes.model');
const mdbOrdenesModel = new OrdenesModelClass();

router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbProductModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
 
  });

module.exports = router;