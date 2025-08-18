'use client';

import { useState } from 'react';
import NaamJaapCore from '@/components/NaamJaapCore';

export default function HomeComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');

  return (
    <NaamJaapCore 
      showMenu={showMenu}
      setShowMenu={setShowMenu}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}