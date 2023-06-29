"use client";
interface MenuItemProps {
  onClick: () => void;
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <li
      className="px-4 py-3 border border-neutral-200 hover:border-neutral-700 rounded cursor-pointer transition font-bold"
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default MenuItem;
