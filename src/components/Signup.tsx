import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required").min(3),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const navigate = useNavigate();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value);
                  formik.setFieldTouched("firstName", true , false);
                }}
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Last Name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <Button
            onClick={() => navigate("/chat")}
            className="w-full"
            type="submit"
          >
            Create an account
          </Button>
          <Button className="w-full" variant="outline">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?
          <a className="underline" href="#">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signup;
