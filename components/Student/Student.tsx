import { useState } from "react";
import Button from "../Button/Button";

const Student = () => {

    const [naming,setNaming] = useState<string>("");
    const [mailing,setMailing] = useState<string>("");
    const [aging,setAging] = useState<number>();
    const [gendering,setGendering] = useState<string>("")


    const alpha = (e:any) =>{
        console.log(e.target.value)


    }
    const beta = (e:any) =>{
        console.log(e.target.value)

    }
    const gema = (e:any) =>{
        console.log(e.target.value)

    }
    const peta = (e:any) =>{
        console.log(e.target.value)

    }
    const onAddHandler = () =>{
        alert("hello")
    }
    return (

        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card" style={{ width: "30rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center">Student Data</h5>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Faizan" onChange={alpha}/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="fa1694701@gmail.com" onChange={beta}/>
                        </div>
                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder="20" onChange={gema}/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Male" onChange={peta}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" onChange={peta}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>

                        <div className="text-center">
                            <Button value="Add Student" color="btn btn-success" onHandler={onAddHandler}/>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}
export default Student;