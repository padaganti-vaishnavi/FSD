import React from 'react'

export default function Payment() {
  return (
    <div classNameName='pay'>
        <div className="form-group row">
    <label for="inputroll" className="col-sm-2 col-form-label">Enter your Roll Number:</label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id="inputroll" placeholder="Enter Roll Number" />
    </div>
    </div>
    <div className="alert alert-success my-4 mx-5" role="alert">
  <h4 className="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully paid the fee to the Collage accont!!.</p>
  <hr/>
  <p className="mb-0">Whenever you need to, be sure to use utilities to keep things nice and tidy.</p>
</div>
    </div>
  )
}
