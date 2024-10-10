import User from "../model/User";
import JobSeeker from "../model/JobSeeker";
import Agency from "../model/Agency";
import Hobby from "../model/Hobby";


export const getUser = async(req:any, res:any) => {

    const users = await User.findAll();
    const agencies = await Agency.findAll();
    const jobseekers = await JobSeeker.findAll();
    const hobbies = await Hobby.findAll();
    console.log("Get User")
    res.send("Hello")
}

export const addUser = async(req:any, res:any) => {

    const user = await User.findAll();
    console.log("Add User")
    
}

export const updateUser = async(req:any, res:any) => {

    const user = await User.findAll();
    console.log("Update User")
    
}