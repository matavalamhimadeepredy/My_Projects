
import React from "react";

const Reddy_form=({handlechange,createuser,isedit,updateuser})=>{
    return(
        <div className="mb-3">
            <form> 
            <div className="mb-3"></div>
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control" value={Reddy_form.Name}  name="name" onChange={handlechange} />
            <div className="mb-3"></div>
            <label htmlFor="" className="form-label">email</label>
            <input type="text" className="form-control" value={Reddy_form.email} name="name" onChange={handlechange} />
            <div className="mb-3"></div>
            <label htmlFor="" className="form-label">password</label>
            <input type="text"  className="form-control" value={ Reddy_form.pasword} name="name" onChange={handlechange}/>
            <div className="mb-3"></div>
            <label htmlFor="" className="form-label">phone</label>
            <input type="text"  className="form-control" value={Reddy_form.Phone} name="name" onChange={handlechange}/>
            <div className="mb-3"></div>
            <label htmlFor="" className="form-label">role</label>
            <input type="text"  className="form-control" value={Reddy_form.Role} name="name" onChange={handlechange}/>
            
           isEdit?(
            <button type="button" 
            className="btn btn-primary " 
            onClick={updateuser}>

            </button>
            <button type="button" 
            className="btn btn-primary" 
            onClick={createuser}>

            </button>
           )  
            </form> 
                   </div>
    );
};
export default Reddy_form;