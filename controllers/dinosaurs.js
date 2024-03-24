const Dinosaur = require('../models/dinosaur');

module.exports.index = async (req, res) => {
  const dinosaurs = await Dinosaur.find({});
  res.render('dinos/index', { dinosaurs });
};

module.exports.createDinosaur = async (req, res, next) => {
  const dinosaur = new Dinosaur(req.body.dinosaur);
  dinosaur.image.url = req.file.path;
  dinosaur.image.fileName = req.file.filename;
  await dinosaur.save();
  req.flash('success', 'Successfully made a new dinosaur');
  res.redirect(`/dinosaurs/${dinosaur._id}`);
};

module.exports.showDinosaur = async (req, res) => {
  const { id } = req.params;
  const dinosaur = await Dinosaur.findById(id);
  res.render('dinos/show', { dinosaur });
};

module.exports.renderEditDinosaur = async (req, res) => {
  const { id } = req.params;
  const dinosaur = await Dinosaur.findById(id);
  if (!dinosaur) {
    req.flash('error', 'Dinosaur does not exist');
    return res.redirect('/');
  }
  res.render('dinos/edit', { dinosaur });
};

module.exports.editDinosaur = async (req, res, next) => {
  const { id } = req.params;
  const dinosaur = await Dinosaur.findByIdAndUpdate(id, {
    ...req.body.dinosaur,
  });
  if (req.file) {
    dinosaur.image.url = req.file.path;
    dinosaur.image.fileName = req.file.filename;
  }
  await dinosaur.save();
  req.flash('success', 'You successfully updated a dinosaur');
  res.redirect(`/dinosaurs/${dinosaur._id}`);
};

module.exports.deleteDinosaur = async (req, res) => {
  const { id } = req.params;
  await Dinosaur.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted dinosaur :(');
  res.redirect('/');
};
