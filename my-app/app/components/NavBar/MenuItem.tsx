"use client";
interface MenuItemProps {
  onClick: () => void;
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <li
      className="px-4 py-3 hover:bg-neutral-500 cursor-pointer transition font-bold"
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default MenuItem;
