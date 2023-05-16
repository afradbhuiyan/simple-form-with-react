import { Link } from 'react-router-dom';
import Input from '../@core/components/Input';
import Label from '../@core/components/Label';
import Checkbox from '../@core/components/Checkbox';
import Button from '../@core/components/Button';
import { useState } from 'react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, remember });
  };

  return (
    <form className="w-96 p-4 rounded bg-white shadow" onSubmit={handleSubmit}>
      {/* Form Header */}
      <div>
        <h4 className="text-2xl text-center capitalize font-medium text-gray-700">
          Register
        </h4>

        <p className="text-sm text-center text-gray-500 flex justify-center items-center gap-x-1">
          <span>Already have an account? Let's</span>
          <Link
            to="/login"
            className="text-primary-500 hover:text-primary-700 hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Form Body */}
      <div className="space-y-4 my-4">
        <div>
          <Label htmlFor="fullName" text="Full Name" required />
          <Input
            id="fullName"
            autoComplete="off"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
          <Label htmlFor="create-password" text="Create Password" required />
          <Input
            id="create-password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="confirm-password" text="Confirm Password" required />
          <Input
            id="confirm-password"
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
              name="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <Label htmlFor="remember">
              you agree with our{' '}
              <Link
                to="/register"
                className="ml-1 text-primary-500 hover:text-primary-700 hover:underline">
                terms of services
              </Link>
            </Label>
          </div>
        </div>
      </div>

      {/* Form Footer */}
      <div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </div>
    </form>
  );
}
