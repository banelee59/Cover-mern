const FuneralParlor = require('../models/FuneralParlor');

exports.registerParlor = async (req, res) => {
  try {
    const parlor = new FuneralParlor(req.body);
    await parlor.save();
    res.status(201).json({
      success: true,
      data: parlor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getAllParlors = async (req, res) => {
  try {
    const parlors = await FuneralParlor.find();
    res.status(200).json({
      success: true,
      data: parlors
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getParlorById = async (req, res) => {
  try {
    const parlor = await FuneralParlor.findById(req.params.id);
    if (!parlor) {
      return res.status(404).json({
        success: false,
        error: 'Funeral parlor not found'
      });
    }
    res.status(200).json({
      success: true,
      data: parlor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.updateParlor = async (req, res) => {
  try {
    const parlor = await FuneralParlor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!parlor) {
      return res.status(404).json({
        success: false,
        error: 'Funeral parlor not found'
      });
    }
    res.status(200).json({
      success: true,
      data: parlor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.deleteParlor = async (req, res) => {
  try {
    const parlor = await FuneralParlor.findByIdAndDelete(req.params.id);
    if (!parlor) {
      return res.status(404).json({
        success: false,
        error: 'Funeral parlor not found'
      });
    }
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 