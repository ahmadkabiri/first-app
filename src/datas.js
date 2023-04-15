let xAxisData = [
  { name: "Jan", Sale: 112_000 },
  { name: "Feb", Sale: 99_000 },
  { name: "Mar", Sale: 12_000 },
  { name: "Apr", Sale: 99_000 },
  { name: "May", Sale: 54_000 },
  { name: "Jun", Sale: 85_000 },
  { name: "Jul", Sale: 34_000 },
  { name: "Agu", Sale: 18_000 },
  { name: "Sep", Sale: 15_000 },
  { name: "Oct", Sale: 73_000 },
  { name: "Nov", Sale: 12_000 },
  { name: "Dec", Sale: 97_000 },
];

const newMembers = [
  {
    id: 1,
    userName: "MohammadAmin",
    title: "Web Developer",
    img: "images/npm.png",
  },
  {
    id: 2,
    userName: "Qadir Yolme",
    title: "Hacker",
    img: "images/npm.png",
  },
  {
    id: 3,
    userName: "Sasan Moghaddas",
    title: "Seo Eng",
    img: "images/npm.png",
  },
  {
    id: 4,
    userName: "Ahmad Kabiri",
    title: "Front-End Developer",
    img: "images/npm.png",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Qadir Yolme",
    date: "12 Jun 2022",
    amount: 122,
    status: "Declined",
    img: "images/npm.png",
  },
  {
    id: 2,
    customer: "Ali Kabiri",
    date: "19 Dec 2022",
    amount: 120,
    status: "Approved",
    img: "images/npm.png",
  },
  {
    id: 3,
    customer: "Mohmmad Qolami",
    date: "5 May 2022",
    amount: 57,
    status: "Pending",
    img: "images/npm.png",
  },
  {
    id: 4,
    customer: "Ahmad Kabiri",
    date: "30 Jul 2022",
    amount: 195,
    status: "Declined",
    img: "images/npm.png",
  },
];

let userRows = [
  {
    id: 1,
    userName: "Qadir Yolme",
    avatar: "images/npm.png",
    email:"Ahmadkabiriw@gmail.com",
    status: "active",
    transaction: "$129.5",
  },
  {
    id: 2,
    userName: "Ahmad Kabiri",
    avatar: "images/npm.png",
    email:"Alikabiriw@gmail.com",
    status: "non-active",
    transaction: "$300",
  },
  {
    id: 3,
    userName: "Ali yaqubi",
    avatar: "images/npm.png",
    email:"navidgba@gmail.com",
    status: "active",
    transaction: "$12",
  },
  {
    id: 4,
    userName: "Hossain rahimi",
    avatar: "images/npm.png",
    email:"hasantrc@gmail.com",
    status: "active",
    transaction: "$500",
  },
];

const products = [
  {
    id:1,
    title:"Asus",
    avatar:"images/npm.png" ,
    price:890
  },
  {
    id:2,
    title:"Acer",
    avatar:"images/npm.png" ,
    price:890
  },
  {
    id:3,
    title:"hp",
    avatar:"images/npm.png" ,
    price:890
  },
  {
    id:4,
    title:"Dell",
    avatar:"images/npm.png" ,
    price:890
  },
]

const productsData = [
  {
    name:'Jan',
    sales:4000,
  },
  {
    name:'Feb',
    sales:3000,
  },
  {
    name:'Mar',
    sales:5000,
  },
  {
    name:'Dec',
    sales:1000,
  },
]


export { xAxisData, newMembers, transActions ,userRows ,products , productsData };
