const pooll = require('../Models/db');
export const execute = async (query:any) => {
    try {
       
        await pooll.query(query);
    
        return true;
    } catch (error:any) {
        console.error(error.stack);
        return false;
    }
};

export const text = `
    CREATE TABLE IF NOT EXISTS "student" (
	    "student_id" varchar(255),
        "email" varchar(255) UNIQUE NOT NULL,
	    "student_name" varchar(255) NOT NULL,
        "password" varchar (255) NOT NULL,
	    PRIMARY KEY ("student_id")
    );`;