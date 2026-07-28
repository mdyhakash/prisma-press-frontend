import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="font-display text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue reading and writing on Prisma Press.
          </p>
        </div>
        {/* FORM */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
