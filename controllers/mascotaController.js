import mascotasModelo from '../models/mascotasModelo.js';

class mascotaController{
    constructor(){

    }

    async create(req, res){
        try {
            const data = await mascotasModelo.create(req.body);

            res.status(201).json({
                message: 'Mascota creada correctamente',
                data
            })

        } catch (e) {
            res.status(500).json({
                message: 'Error al crear la mascota',
                error: e.message
            })
        }
    }

    async update(req, res){
        try {
            const id = req.params.id;
            const data = await mascotasModelo.update(id,req.body);
            if(!data){
                return res.status(404).json({
                    message: 'Mascota no encontrada'
                })
            }

            res.status(200).json({
                message: 'Mascota actualizada correctamente', data
            })
        } catch (e) {
            console.log(e);
            res.status(500).json({
        
                message: 'Error al actualizar la mascota'
            })
        }
    }

    async delete(req, res){
        try {
            const id = req.params.id;
            const data = await mascotasModelo.delete(id);
            if (!data) {
                return res.status(404).json({
                    message: 'Mascota no encontrada'
                })
            }

            res.status(206).json({
                message: 'Mascota eliminada correctamente'
            })
        } catch (e) {
            res.status(500).json({
                message: 'Error al eliminar la mascota'
            })
        }
    }

    async getAll(req, res){
        try {

            // const data = await mascotasModelo.getAll(req.body);

            const data = await mascotasModelo.getAll();

            res.status(201).json({
                message: 'todas las Mascotas ',
                data
            })
        } catch (e) {
            res.status(500).json({
                message: 'Error todas las mascota'
            })
        }
    }

    async getOne(req, res){
        try {
            const id = req.params.id;
            const data = await mascotasModelo.getOne(id);
            if (!data) {
                return res.status(404).json({
                    message: 'Mascota no encontrada'
                })
            }

            res.status(201).json({
                message: 'una Mascota ',
                data

            })
        } catch (e) {
            res.status(500).json({
                message: 'Errorw en mascota'
            })
        }
    }
}

export default new mascotaController();