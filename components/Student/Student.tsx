import { useState } from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addUsers } from "@/store/UserdatialSlice";
import type { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

type A = {
    Name:string,
    Email:string,
    Age:number,
    Gender:string
}

const Student = () => {
    type Dispatch = ThunkDispatch<RootState, unknown, AnyAction>;
    const dispatch = useDispatch<Dispatch>();
    const [naming,setNaming] = useState<string>("");
    const [mailing,setMailing] = useState<string>("");
    const [aging,setAging] = useState<number>(0);
    const [gendering,setGendering] = useState<string>("")


    const alpha = (e:any) =>{
        setNaming(e.target.value)


    }
    const beta = (e:any) =>{
        setMailing(e.target.value)

    }
    const gema = (e:any) =>{
        setAging(e.target.value)

    }
    const peta = (e:any) =>{
        setGendering(e.target.value)

    }
    const onAddHandler = () =>{

        let adding:A = {
            Name:naming,
            Email:mailing,
            Age:aging,
            Gender:gendering
        }
        console.log(adding)
        const addUserAction = addUsers(adding);
        dispatch(addUserAction)
        
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