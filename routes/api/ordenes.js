let express = require('express');
let router = express.Router();

const OrdenesModelClass = require('../../models/ordenes/ordenes.model');
const mdbOrdenesModel = new OrdenesModelClass();

router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbOrdenesModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
 
  });

  router.get('/one/:id', async (req, res)=>{
    try{
      let { id } = req.params;
      let oneDocument = await mdbOrdenesModel.getById(id);
      res.status(200).json(oneDocument);
    } catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  
  });

module.exports = router;