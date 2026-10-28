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

export async function deletePoi(req, res) {
    const id = req.params.id || req.body._id || req.body.id;
    const filter = id ? { _id: id } : req.body;
    const user = await Poi.deleteOne(filter);
    if (user.deletedCount > 0) {
        res.status(200).json({
            mensagem: "deletado com sucesso"
        });
        return;
    }
    res.status(400).json({
        mensagem: 'usuário não encontrado'
    });
}

export async function updatePoi(req, res) {
    try {
        const id = req.params.id || req.body._id || req.body.id;
        const user = await Poi.updateOne(
            { _id: id },
            { $set: req.body }
        );
        if (user.matchedCount > 0) {
            res.status(200).json({
                mensagem: "Modificado com sucesso"
            });
            return;
        }
        res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao atualizar",
            erro: error.message
        });
    }
}
