'use strict'
var Project = require('../models/project');
var fs = require('fs');

var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo test'
        });
    },

    saveProject: function (req, res) {
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({
                message: "Error al guardar"
            });
            if (!projectStored) return res.status(404).send({
                message: "No se ha podido guardar el proyecto"
            });
            return res.status(200).send({
                project: projectStored
            });
        });
    },


    getProject: function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({
            message: 'El proyecto no existe'
        });

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });
            if (!project) return res.status(404).send({
                message: 'El proyecto no existe'
            });

            return res.status(200).send({
                project
            });
        });


    },

    getProjects: function (req, res) {
        Project.find({}).sort('+year').exec((err, projects) => {
            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });
            if (!projects) return res.status(404).send({
                message: 'No hay proyectos para mostrar'
            });
            return res.status(200).send({
                projects
            });
        });
    },

    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {
            new: true
        }, (err, projectUpdated) => {
            if (err) return res.status(500).send({
                message: 'Error al actualizar'
            });
            if (!projectUpdated) return res.status(404).send({
                message: 'No se ha encontrado el proyecto'
            });
            return res.status(200).send({
                project: projectUpdated
            });
        });

    },


    deleteProject: function (req, res) {
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectRemoved) => {
            if (err) return res.status(500).send({
                message: 'Error al eliminar'
            });
            if (!projectRemoved) return res.status(404).send({
                message: 'No se ha encontrado el proyecto'
            });
            return res.status(200).send({
                project: projectRemoved
            });
        });
    },

    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {

                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if (err) return res.status(500).send({message: 'La imagen no se ha subido'});
                    if (!projectUpdated) return res.status(404).send({message: 'Proyecto no encontrado'});
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            }else{
                fs.unlink(filePath,(error) =>{
                    return res.status(200).send({message:"La extensión no es valida"})
                });
            }

        } else {
            return res.status(200).send({
                message: fileName
            })
        }
    }
};

module.exports = controller;