import Checkbox from "@mui/material/Checkbox";

const MyCheckbox = ({ selectedItems, setSelectedItems, cartItems }) => {
  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) setSelectedItems([]);
    else setSelectedItems(cartItems.map((item) => item.id));
  };

  return (
    <Checkbox
      checked={selectedItems.length === cartItems.length}
      onChange={handleSelectAll}
    />
  );
};

export default MyCheckbox;
