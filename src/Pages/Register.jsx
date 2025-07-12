import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  const password = watch("password");

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register("username", {
              required: "Username is required",
              validate: (value) =>
                !/\s/.test(value) || "Username must not contain spaces",
            })}
          />
          {errors.username && (
            <small className="text-danger">{errors.username.message}</small>
          )}
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                message:
                  "Password must include capital letter, number, and special character",
              },
            })}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <small className="text-danger">
              {errors.confirmPassword.message}
            </small>
          )}
        </Form.Group>

        {/* Address */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            {...register("address")}
            placeholder="Optional"
          />
        </Form.Group>

        <Button type="submit" variant="warning" className="w-100">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
