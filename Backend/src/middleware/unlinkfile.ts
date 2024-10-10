import fs from 'fs';

export const unLink = (resume:any) => {
    console.log("Unlinking........")    
    fs.unlink(resume, (error)=>{console.log("Error in deleting PDF:::  ", error)});
}