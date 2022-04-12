import { useState } from "react";

const Filters = ({ handleFilters }) => {
  const [checked, setChecked] = useState([]);
  const families = [
    { id: 0, name: "Rosaceae" },
    { id: 1, name: "Rutáceae" },
    { id: 2, name: "Lauraceae" },
    { id: 3, name: "Oxalidaceae" },
    { id: 4, name: "Arecaceae" },
    { id: 5, name: "Granada" },
  ];

  // everything should be immutable

  const handleToggle = (id, name) => {
    // update the checked information into the parrent Component

    // if indexof doenst find the element returns -1
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    // meaning the value is not in the checked
    if (currentIndex === -1) {
      setChecked([...checked, id]);
      newChecked.push(id);
    } else {
      setChecked(checked.filter());
      // else if exists remove it from the list cause it was unchecked
      newChecked.splice(currentIndex, 1);
    }

    const newCheckedObjects = newChecked.map((value) => {
      return families.filter((family) => {
        return family.id === value;
      });
    });

    setChecked(newChecked);

    handleFilters(newCheckedObjects);
  };

  return (
    <div>
      <label className="family-title" htmlFor="family">
        Family
      </label>
      {families.map((family) => {
        return (
          <div>
            <input
              name={family.name}
              type="checkbox"
              onChange={(e) => handleToggle(family.id, family.name)}
              checked={checked.indexOf(family.id) === -1 ? false : true}
            />
            <label htmlFor="family-name">{family.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
