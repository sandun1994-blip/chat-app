import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
console.log(email);
    if (!email) {
      return res.json({ msg: "Email is required", status: false });
    }

    const prisma = getPrismaInstance();
    const user = await prisma.u
    if (!user) {
        return res.json({msg:'user nt found',status:false})
    }else{
        return res.json({msg:"user found",status:true,data:user})
    }
  } catch (error) {
    console.log(error);
    next();
  }
};



export const getUser =async(req,res)=>{

    try {
        return res.json({g:"hhh"})
    } catch (error) {
        
    }
}
