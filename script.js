const data = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 4,
    title: "Huawei P30",
    price: 499,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 5,
    title: "OPPOF19",
    price: 280,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 6,
    title: "MacBook Pro",
    price: 1749,
    inStock: true,
    category: "laptops",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    price: 1499,
    inStock: false,
    category: "laptops",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    price: 1499,
    inStock: false,
    category: "laptops",
  },
  {
    id: 9,
    title: "HP Pavilion 15-DK1056WM",
    price: 1099,
    inStock: true,
    category: "laptops",
  },
  {
    id: 10,
    title: "Infinix INBOOK",
    price: 1099,
    inStock: true,
    category: "laptops",
  },
];

const createTable = (productData) => {
  const tableEl = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headers = Object.keys(productData[0]);
  tableHead.appendChild(createHeaderRow(headers));

  productData.forEach((rowData) => {
    tableBody.appendChild(createProductRow(rowData));
  });

  tableEl.append(tableHead);
  tableEl.appendChild(tableBody);
  return tableEl;
};

const createProductRow = (product) => {
  const tr = document.createElement("tr");
  Object.values(product).forEach((values) => {
    const td = document.createElement("td");
    td.textContent = values;
    tr.appendChild(td);
  });
  return tr;
};

const createHeaderRow = (columnsNames) => {
  const tr = document.createElement("tr");
  columnsNames.forEach((columnsNames) => {
    const th = document.createElement("th");
    th.textContent = columnsNames[0].toUpperCase() + columnsNames.slice(1);

    const searchUp = document.createElement("span");
    searchUp.textContent = "🔼";
    const searchDown = document.createElement("span");
    searchDown.textContent = "🔽";

    searchUp.onclick = () => sortDataBy(columnsNames, "ASC");
    searchDown.onclick = () => sortDataBy(columnsNames, "DESC");

    th.appendChild(searchDown);
    th.appendChild(searchUp);
    tr.appendChild(th);
  });
  return tr;
};

const sortDataBy = (columnName, direction) => {
  const sortedASCData = [
    ...data.sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1)),
  ];
  const sortedDESCData = [
    ...data.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1)),
  ];

  rederTable(direction === "ASC" ? sortedASCData : sortedDESCData);
};

const rederTable = (productData) => {
  const sortableTableEl = document.getElementById("dortsbleTable");
  sortableTableEl.innerHTML = "";
  sortableTableEl.appendChild(createTable(productData));
};

rederTable(data);
