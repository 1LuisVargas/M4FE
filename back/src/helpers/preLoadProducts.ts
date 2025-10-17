import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 17",
    price: 799,
    description:
      "Even more delightful. Even more durable.",
    image:
      "https://www.apple.com/v/iphone-17/c/images/overview/contrast/iphone_17__ck7zzemcw37m_medium.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/v/macbook-air/w/images/overview/routers/compare_mba_13_15__caznvrb61zyu_medium.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 999,
    description:
      "The ultimate iPad experience with the most advanced technology.",
    image:
      "https://www.apple.com/v/ipad-pro/au/images/overview/contrast/product-tile/ipad_pro__ea93uc0cnvsm_medium.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 11",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/v/apple-watch-series-11/b/images/overview/contrast/contrast_s11__dkui1dgfuwcy_medium.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro 3",
    price: 249,
    description:
      "The world’s best in-ear Active Noise Cancellation, with heart rate sensing during workouts.",
    image:
      "https://www.apple.com/v/airpods-pro/q/images/overview/contrast/explore_airpods_pro_3_open__e4dxk8zpalkm_medium.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Surprising sound for its size",
    image:
      "https://www.apple.com/v/homepod/shared/compare/b/images/overview/compare/homepodmini__b3h6nqh448dy_medium.jpg",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
