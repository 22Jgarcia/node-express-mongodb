import mascotasModelo from '../models/mascotasModelo.js';

class mascotaController{
    constructor(){

    }

    async create(req, res){
        try {
            const data = mascotasModelo.create(req, body);

            res.status(201).json({
                message: 'Mascota creada correctamente',
                data
            })

        } catch (e) {
            res.status(500).json({
                message: 'Error al crear la mascota'
            })
        }
    }

    async update(req, res){
        try {
            res.status(201).json({
                message: 'Mascota actualizada correctamente'
            })
        } catch (e) {
            res.status(500).json({
                message: 'Error al actualizar la mascota'
            })
        }
    }

    async delete(req, res){
        try {
            res.status(201).json({
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
            res.status(201).json({
                message: 'todas las Mascotas '
            })
        } catch (e) {
            res.status(500).json({
                message: 'Error todas las mascota'
            })
        }
    }

    async getOne(req, res){
        try {
            res.status(201).json({
                message: 'una Mascota '
            })
        } catch (e) {
            res.status(500).json({
                message: 'Errorw en mascota'
            })
        }
    }
}

export default new mascotaController();