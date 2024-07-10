const { hash } = require("bcrypt");


async function hashPassword(password){

  const hashedPassword = await hash(password,12)
  return hashedPassword
}




async function verifyPassword(){

}