import RegisterForm from "../_components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="font-display text-3xl font-semibold">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Join Prisma Press to read, write, and follow independent voices.
          </p>
        </div>
        {/* FORM */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
