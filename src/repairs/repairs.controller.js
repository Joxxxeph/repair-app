const RepairService = require("./repairs.service");

// endpoint to search all users
exports.findAllRepairs = async (req, res) => {
  
  try {

    const repairs = await RepairService.findAll()
    return res.status(200).json(repairs);

  } catch (error) {

    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!'
    })

  }

};

//endpoint to create all users
exports.createRepair = async (req, res) => {
 
  try {
    
    const { date, userId } = req.body
    const repair = await RepairService.create({ date, userId })
    return res.status(201).json(repair);

  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
      error
    })
  }
};

//endpoint to search for a specific user
exports.findOneRepair = async (req, res) => {
  try {
    const { id } = req.params
    const repair = await RepairService.findOne(id)

    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'repair not found'
      })
    }

    return res.status(200).json(repair);

  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!'
    })
  }
};

//endpoint to update a user
exports.updateRepair = async (req, res) => {
  
  try {
    
    const { id } = req.params
    const repair = await RepairService.findOne(id)

    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found'
      })
    }

    const repairUpdated = await RepairService.update(repair)

    return res.status(200).json(repairUpdated);

  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!'
    })
  }
};

//endpoint to delete a user
exports.deleteOneRepair = async (req, res) => {
  
  try {
    
    const { id } = req.params
    const repair = await RepairService.findOne(id)

    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found'
      })
    }
    await RepairService.delete(repair)
    return res.status(204).json(null);
    
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!'
    })
  }

};

