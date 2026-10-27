import Poi from "../model/Poi.js";

export async function getPois(req,res) {
    const pois = await Poi.find();
    res.json(pois);
}

export async function  createPoi(req,res) {
    const user = await Poi.insertOne(req.body);
    if(user) {
        res.status(201).json(user);
        return;
    }
    res.status(400).json({ message: "Erro ao criar Poi"})
}

export async function getPoiByText(req, res){
    const pois = await Poi.find(
        {$text:{$search: req.params.text}});
    res.json(pois)}

export async function  deletePoi(req,res) {
    const user = await Poi.deleteOne(req.body);
    if(user.deletedCount>0) {
        res.status(200).json({
            mensagem:"deletado com sucesso"});
        return;
    }
    res.status(400).json({
        mensagem:'usuário não encontrado'
    });
}