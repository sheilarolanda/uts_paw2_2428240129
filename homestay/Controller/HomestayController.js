const fakultasModel = require('../models/fakultasModel');
const { errorHttp } = require('../middlewares/errorHandler');
const HomestayModels = require('../Models/HomestayModels');

exports.getAll = (req, res) => {
  res.json(HomestayModels.getAll());
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = HomestayModels.getById(id);
  if (!data) return next(errorHttp(404, 'Fakultas tidak ditemukan'));
  res.json(data);
};

exports.create = (req, res, next) => {
  const { nama } = req.body;
  if (!nama) return next(errorHttp(400, 'nama wajib diisi'));

  const baru = fakultasModel.create({ nama });
  res.status(201).json(baru);
};