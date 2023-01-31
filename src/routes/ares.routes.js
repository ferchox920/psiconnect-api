import { Router } from "express";
import { findAllArea, findAllProfessionalWithArea } from "../query/queryToArea.js";


const areaRoutes = Router();

areaRoutes.get('/', async (req, res) => {
    try {
      const data = await findAllArea();
      if (!data) return res.status(400).json("Base de datos vacia");
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ data: error.message });
    }
  })
areaRoutes.get('/professional/:area', async (req, res) => {
  const {area} = req.params;
    try {
      const data = await findAllProfessionalWithArea(area);
      if (!data) return res.status(400).json("Base de datos vacia");
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ data: error.message });
    }
  })

  


export default areaRoutes;