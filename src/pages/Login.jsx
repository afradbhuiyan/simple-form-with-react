import { Link } from 'react-router-dom';
import Input from '../@core/components/Input';
import Label from '../@core/components/Label';
import Checkbox from '../@core/components/Checkbox';
import Button from '../@core/components/Button';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <form className="w-96 p-4 rounded bg-white shadow" onSubmit={handleSubmit}>
      {/* Form Header */}
      <div>
        <h4 className="text-2xl text-center capitalize font-medium text-gray-700">
          Login
        </h4>

        <p className="text-sm text-center text-gray-500 flex justify-center items-center gap-x-1">
          <span>Don't have an account?</span>
          <Link
            to="/register"
            className="text-primary-500 hover:text-primary-700 hover:underline">
            Register
          </Link>
        </p>
      </div>

      {/* Form Body */}
      <div className="space-y-4 my-4">
        <div>
          <Label htmlFor="email" text="Email Address" required />
          <Input
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="password" text="Password" required />
          <Input
            id="password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Checkbox
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <Label htmlFor="remember" text="Remember me" />
          </div>

          <div className="flex items-center gap-x-2">
            <Link
              to="/login"
              className="text-sm text-primary-500 hover:text-primary-700 hover:underline focus:outline-none focus:text-primary-700">
              Forget Password
            </Link>
          </div>
        </div>
      </div>

      {/* Form Footer */}
      <div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
