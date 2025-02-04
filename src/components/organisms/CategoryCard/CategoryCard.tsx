import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { HttpTypes } from '@medusajs/types';

export function CategoryCard({
  category,
}: {
  category: HttpTypes.StoreProductCategory;
}) {
  return (
    <Link
      href={`/categories/${category.handle}`}
      className='relative flex flex-col items-center border rounded-sm bg-component transition-all hover:rounded-full w-[233px] aspect-square'
    >
      <div className='relative aspect-square overflow-hidden w-[200px]'>
        <Image
          src={
            `/images/categories/${category.handle}.png` ||
            '/images/categories/placeholder.png'
          }
          alt={category.name}
          width={233}
          height={193}
          className='object-contain scale-90 rounded-full'
        />
      </div>
      <h3 className='w-full text-center label-lg text-primary'>
        {category.name}
      </h3>
    </Link>
  );
}
