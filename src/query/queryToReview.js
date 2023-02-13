import REVIEW from "../models/REVIEW.js";
import USERS from "../models/USERS.js"




export async function findAllReviews (){
    const reviews = await REVIEW.findAll({
        include: {
            model: USERS
        }, 

       
    })
    return reviews
}









