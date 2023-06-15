const mobilePhones = [
  {
    name: "iPhone 13",
    price: 999,
    brand: "Apple",
    specifications: {
      screenSize: 6.1,
      resolution: "2532 x 1170",
      storage: "128GB",
      colors: ["Midnight Green", "Starlight", "Product(RED)"],
      camera: {
        resolution: "12 MP",
        features: ["Night mode", "Deep Fusion", "Smart HDR 4"],
      },
      connectivity: {
        wifi: "802.11ax Wi‑Fi 6 with 2x2 MIMO",
        bluetooth: "Bluetooth 5.0",
        nfc: true,
      },
    },
  },
  {
    name: "Samsung Galaxy S21",
    price: 799,
    brand: "Samsung",
    specifications: {
      screenSize: 6.2,
      resolution: "2400 x 1080",
      storage: "128GB",
      colors: ["Phantom Black", "Phantom White", "Phantom Gray"],
      camera: {
        resolution: "12 MP",
        features: ["Super Steady", "Space Zoom", "Night mode"],
      },
      connectivity: {
        wifi: "Wi-Fi 6E",
        bluetooth: "Bluetooth 5.2",
        nfc: true,
      },
    },
  },
  {
    name: "Google Pixel 6",
    price: 699,
    brand: "Google",
    specifications: {
      screenSize: 6.4,
      resolution: "2400 x 1080",
      storage: "128GB",
      colors: ["Sorta Sage", "Stormy Black", "Clearly White"],
      camera: {
        resolution: "50 MP",
        features: ["Night Sight", "Astrophotography", "Super Res Zoom"],
      },
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.2",
        nfc: true,
      },
    },
  },
  {
    name: "OnePlus 9 Pro",
    price: 899,
    brand: "OnePlus",
    specifications: {
      screenSize: 6.7,
      resolution: "3216 x 1440",
      storage: "256GB",
      colors: ["Morning Mist", "Pine Green", "Stellar Black"],
      camera: {
        resolution: "48 MP",
        features: ["Hasselblad partnership", "Nightscape", "UltraShot HDR"],
      },
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.2",
        nfc: true,
      },
    },
  },
  {
    name: "Xiaomi Mi 11",
    price: 799,
    brand: "Xiaomi",
    specifications: {
      screenSize: 6.81,
      resolution: "3200 x 1440",
      storage: "128GB",
      colors: ["Midnight Gray", "Horizon Blue", "Frost White"],
      camera: {
        resolution: "108 MP",
        features: ["Night mode", "Ultra-wide-angle", "AI scene detection"],
      },
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.2",
        nfc: true,
      },
    },
  },
  {
    name: "Sony Xperia 1 III",
    price: 1199,
    brand: "Sony",
    specifications: {
      screenSize: 6.5,
      resolution: "3840 x 1644",
      storage: "256GB",
      colors: ["Frosted Black", "Frosted Gray", "Frosted Purple"],
      camera: {
        resolution: "12 MP",
        features: ["Real-time Eye AF", "Optical zoom", "4K HDR recording"],
      },
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.2",
        nfc: true,
      },
    },
  },
  {
    name: "LG Velvet",
    price: 599,
    brand: "LG",
    specifications: {
      screenSize: 6.8,
      resolution: "2460 x 1080",
      storage: "128GB",
      colors: ["Aurora Silver", "Aurora White", "Aurora Green"],
      camera: {
        resolution: "48 MP",
        features: ["AI CAM", "Night mode", "Dual Recording"],
      },
      connectivity: {
        wifi: "Wi-Fi 5",
        bluetooth: "Bluetooth 5.1",
        nfc: true,
      },
    },
  },
  {
    name: "Motorola Edge+",
    price: 999,
    brand: "Motorola",
    specifications: {
      screenSize: 6.7,
      resolution: "2340 x 1080",
      storage: "256GB",
      colors: ["Thunder Grey", "Smoky Sangria"],
      camera: {
        resolution: "108 MP",
        features: ["Night Vision", "Ultra-wide-angle", "Macro Vision"],
      },
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.1",
        nfc: true,
      },
    },
  },
  {
    name: "Nokia 8.3",
    price: 499,
    brand: "Nokia",
    specifications: {
      screenSize: 6.81,
      resolution: "2400 x 1080",
      storage: "64GB",
      colors: ["Polar Night"],
      camera: {
        resolution: "64 MP",
        features: ["ZEISS Optics", "Night mode", "Cinema mode"],
      },
      connectivity: {
        wifi: "Wi-Fi 5",
        bluetooth: "Bluetooth 5.0",
        nfc: true,
      },
    },
  },
  {
    name: "Huawei P40 Pro",
    price: 799,
    brand: "Huawei",
    specifications: {
      screenSize: 6.58,
      resolution: "2640 x 1200",
      storage: "256GB",
      colors: ["Silver Frost", "Blush Gold", "Deep Sea Blue"],
      camera: {
        resolution: "50 MP",
        features: ["Ultra Vision Leica", "SuperSensing", "4K Time-lapse"],
      },
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.1",
        nfc: true,
      },
    },
  },
];

const usdMobilePhones = [];
const USDRatio = 1.09;

// for (let i = 0; i < mobilePhones.length; ++i) {
//   const mobilePhone = { ...mobilePhones[i] };
//   mobilePhone.price = Math.round(mobilePhone.price * USDRatio);
//   usdMobilePhones.push(mobilePhone);
// }

// mobilePhones.forEach((mobilePhone) => {
//   const clonedMobilePhone = { ...mobilePhone };
//   clonedMobilePhone.price = Math.round(clonedMobilePhone.price * USDRatio);
//   usdMobilePhones.push(clonedMobilePhone);
// });

// console.log(mobilePhones);
// console.log(usdMobilePhones);

// const newArray = mobilePhones.map((mobilePhone) => {
//   const clonedMobilePhone = { ...mobilePhone };
//   clonedMobilePhone.price = Math.round(clonedMobilePhone.price * USDRatio);

//   return clonedMobilePhone;
// });
