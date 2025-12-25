
import "./css/EmployeeRegistration.module.css";

const EmployeeForm = () => {
  return (
<>
    <div
      className="container mt-5 d-flex justify-content-center"
      
    >
      <div className="card shadow-lg p-3">
        
        <div
          className="card-header bg-primary text-white"
          
        >
          Employee Registration Form
        </div>

        <div className="card-body">
          <form>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Full Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter full name" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Employee ID</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="EMP001" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Email</label>
              <div className="col-sm-8">
                <input type="email" className="form-control" placeholder="example@email.com" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Mobile Number</label>
              <div className="col-sm-8">
                <input type="tel" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Designation</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Department</label>
              <div className="col-sm-8">
                <select className="form-select" defaultValue="">
                  <option value="" disabled>
                    Select Department
                  </option>
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Mechanical Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Electronics & Communication</option>
                  <option>Civil Engineering</option>
                  <option>Management</option>
                  <option>Administration</option>
                  <option>Library</option>
                  <option>Accounts</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Gender</label>
              <div className="col-sm-8 d-flex gap-3">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" />
                  <label className="form-check-label">Male</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" />
                  <label className="form-check-label">Female</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" />
                  <label className="form-check-label">Other</label>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Address</label>
              <div className="col-sm-8">
                <textarea className="form-control" rows="3" placeholder="Enter address"></textarea>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label">Upload Photo</label>
              <div className="col-sm-8">
                <input type="file" className="form-control" />
              </div>
            </div>

            <div className="text-end d-flex" >
              <button type="reset" className="btn btn-secondary px-4 me-2">
                Reset
              </button>
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default EmployeeForm;
