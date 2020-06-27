import { createSchema, Type, typedModel } from 'ts-mongoose'
 
const UserSchema = createSchema({
    parentId: Type.string(),
    email: Type.string({ unique: true, lowercase: true, trim: true, required: true }),
    username: Type.string({ unique: true, lowercase: true, required: true }),
    password: Type.string({ required: true }),
    salt: Type.string({ required: true }),
    firstName: Type.string({ required: true, trim: true }),
    lastName: Type.string({ required: true, trim: true }),
    active: Type.boolean(),
    registrationDate: Type.date(),
    resetPasswordKey: Type.string()
})

const User = typedModel('user', UserSchema)
export { User, UserSchema }