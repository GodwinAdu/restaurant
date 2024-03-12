import { model, models,Schema  } from "mongoose";


const UserSchema = new Schema({
    clerkId:{
        type:String,
        require:true
    },
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    imageUrl:String,
    phone:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
          }
    ],
    worker:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      }

})

const User = models.User || model("User",UserSchema);

export default User;