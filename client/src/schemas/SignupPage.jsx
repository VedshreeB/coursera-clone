import * as Yup from "yup";

export const SignupSchema = Yup.object({
    first_name:Yup.string().min(2).max(25).required("Please enter your first name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    last_name:Yup.string().min(2).max(25).required("Please enter your last name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    username:Yup.string().min(6).required("Username must have length=6"),
    email:Yup.string().email().required("please enter valid email"),
    password:Yup.string().min(6).required("Password must have length=6")
});
