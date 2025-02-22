import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Todo from '@/components/todo';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useRouter } from 'next/router';

function pages1() {
  const { isLoggedIn, userRole } = useRecoilValue(authState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
    if (userRole === 'guest') {
      router.push('/Lobby');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Todo />
    </div>
  );
}

export default pages1;
