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
  router.post('/new', async (req, res)=>{
    try{
      let { nombre,email,tel,producto,formap,estado} = req.body;
      
      var rslt = await mdbOrdenesModel.addOne({ nombre,email,tel,producto,formap,estado}); 
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
 
  });
  router.put('/upd/:id', async (req, res)=>{
    try{
      let {id} = req.params;
      //id = Number(id);
      let {estado} = req.body;
      
      let rslt = await mdbOrdenesModel.updateById(id, estado);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

module.exports = router;