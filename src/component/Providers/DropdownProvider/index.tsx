import { useEffect, useRef } from "react";

const DropdownProvider = ({ children, setOpen }: any) => {
  const dropdownRef: any = useRef(null);
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="relative">
      {children}
    </div>
  );
};

export default DropdownProvider;
