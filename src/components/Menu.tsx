import Link from "next/link";
import _ from "lodash";
import { Category } from "@/model";

const Menu = ({ menuList }: { menuList: Category[] }) => {
  return (
    <div>
      <ul className='menu w-56 rounded-box'>
        <li className='menu-title'>หมวดหมู่</li>
        <li className=''>
          <Link href={`/`} className='active:bg-accent focus:bg-accent'>
            ทั้งหมด
          </Link>
        </li>
        {_.map(menuList, (each: Category, index: number) => (
          <li key={index} className=''>
            <Link
              href={`/category/${each?._id}`}
              className='active:bg-accent focus:bg-accent'
            >
              {each?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
