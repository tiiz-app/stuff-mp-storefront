'use client';

import { Input } from '@/components/atoms';
import useFilters from '@/hooks/useFilters';
import { SearchIcon } from '@/icons';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const NavbarSearch = () => {
  const searchParams = useSearchParams();
  const { updateFilters } = useFilters('search');

  const [search, setSearch] = useState(
    searchParams.get('search') || ''
  );

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams]);

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    updateFilters(search);
  };

  return (
    <form
      className='flex items-center'
      method='POST'
      onSubmit={submitHandler}
    >
      <Input
        icon={<SearchIcon />}
        placeholder='Search product'
        value={search}
        changeValue={setSearch}
      />
      <input type='submit' className='hidden' />
    </form>
  );
};
