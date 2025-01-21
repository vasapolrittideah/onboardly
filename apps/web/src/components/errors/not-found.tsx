import { Link } from '@tanstack/react-router';

import * as Button from '@/components/ui/button/button';

const NotFound: React.FC = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center">
    <h1 className="text-bg-soft-200 select-none text-center font-mono text-[300px] font-bold leading-none">
      404
    </h1>
    <h1 className="text-title-h6 mt-2">
      Oops, the page you&apos;re looking for took a vacation!
    </h1>
    <p className="text-paragraph-sm mt-2 max-w-80 text-center text-gray-500">
      This page might have been removed, renamed, or doesn&apos;t exist anymore.
    </p>
    <Link to="/">
      <Button.Root
        className="mt-6"
        variant="neutral"
        mode="stroke"
        size="small">
        Go home
      </Button.Root>
    </Link>
  </div>
);

export default NotFound;
