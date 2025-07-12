import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: "Email is required" })}
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
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </Form.Group>

        <Button type="submit" variant="warning" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
}
