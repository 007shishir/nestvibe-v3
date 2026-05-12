'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@heroui/react';

export function withAdminAuth(Component) {
  return function AdminProtected(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      async function checkAuth() {
        try {
          const res = await fetch('/api/auth/me');
          const data = await res.json();

          if (!data.authenticated || data.user.role !== 'admin') {
            router.push('/dashboard');
            return;
          }

          setIsAdmin(true);
        } catch (error) {
          router.push('/auth');
        } finally {
          setIsLoading(false);
        }
      }

      checkAuth();
    }, [router]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner size="lg" />
        </div>
      );
    }

    if (!isAdmin) {
      return null;
    }

    return <Component {...props} />;
  };
}

export function withUserAuth(Component) {
  return function UserProtected(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      async function checkAuth() {
        try {
          const res = await fetch('/api/auth/me');
          const data = await res.json();

          if (!data.authenticated) {
            router.push('/auth');
            return;
          }

          setIsAuthenticated(true);
        } catch (error) {
          router.push('/auth');
        } finally {
          setIsLoading(false);
        }
      }

      checkAuth();
    }, [router]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner size="lg" />
        </div>
      );
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
