import Link from "next/link";
import { Category } from "@/model";
import _ from "lodash";

function Navbar({ categories }: { categories: Category[] }) {
  const logo = process.env.NEXT_PUBLIC_LOGO_NAME;
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link className='btn btn-ghost text-xl' href='/'>
          <img src={`/${logo}`} className='h-12' />
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>หมวดหมู่</summary>
              <ul className='p-2 bg-base-100 rounded-t-none z-20'>
                <li className='z-10'>
                  <Link href='/'>ทั้งหมด</Link>
                </li>
                {_.map(categories, (each: Category, index: number) => (
                  <li key={index} className='z-10'>
                    <Link href={`/category/${each?._id}`}>{each?.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
