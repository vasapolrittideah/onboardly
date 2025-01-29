import { Divider } from '@repo/ui';
import { Link } from '@tanstack/react-router';

import logo from '@/assets/logo.svg';

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, description, children }: AuthLayoutProps) => {
  return (
    <section className="ring-stroke-soft-200 shadow-regular-sm mt-24 flex w-full max-w-[480px] flex-col items-center justify-center rounded-3xl bg-white p-6 ring-1 ring-inset">
      <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full backdrop-blur-xl before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10">
        <div className="bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 relative z-10 flex size-16 items-center justify-center rounded-full ring-1 ring-inset">
          <Link className="cursor-pointer" to="/">
            <img
              src={logo}
              alt="Logo"
              className="size-8 select-none rounded-none"
            />
          </Link>
        </div>
      </div>

      <h1 className="text-title-h4 mt-3">{title}</h1>
      <p className="text-paragraph-md mt-2 text-gray-600">{description}</p>
      <Divider.Root
        style={{
          background:
            'linear-gradient(90deg, currentcolor 4px, transparent 4px) 50% 50% / 8px 1px repeat-x',
        }}
        className="text-stroke-sub-300 my-8 h-1 w-full before:bg-transparent"></Divider.Root>

      {children}
    </section>
  );
};

export default AuthLayout;
