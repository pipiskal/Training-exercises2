const y = {
  0: {
    id: "123",
    name: "Achilleas",
  },
  1: {
    id: "133",
    name: "Ioanna",
  },
};

// to recheck

const allEntries = Object.entries(y);

const result = allEntries.find(([key, value]) => value.id === "133");
console.log(result);
