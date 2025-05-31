const department = require('../models/Department')

DepartmentService = function() {
  this.GetDepartmentID = async function(name) {
    const department = await department.find({department_name:name})
  };
};

exports.DepartmentService = DepartmentService;