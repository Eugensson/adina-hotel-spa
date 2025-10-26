import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

import Room1Img from "@/public/assets/rooms/1.jpg";
import Room1ImgLg from "@/public/assets/rooms/1-lg.jpg";
import Room2Img from "@/public/assets/rooms/2.jpg";
import Room2ImgLg from "@/public/assets/rooms/2-lg.jpg";
import Room3Img from "@/public/assets/rooms/3.jpg";
import Room3ImgLg from "@/public/assets/rooms/3-lg.jpg";
import Room4Img from "@/public/assets/rooms/4.jpg";
import Room4ImgLg from "@/public/assets/rooms/4-lg.jpg";
import Room5Img from "@/public/assets/rooms/5.jpg";
import Room5ImgLg from "@/public/assets/rooms/5-lg.jpg";
import Room6Img from "@/public/assets/rooms/6.jpg";
import Room6ImgLg from "@/public/assets/rooms/6-lg.jpg";
import Room7Img from "@/public/assets/rooms/7.jpg";
import Room7ImgLg from "@/public/assets/rooms/7-lg.jpg";
import Room8Img from "@/public/assets/rooms/8.jpg";
import Room8ImgLg from "@/public/assets/rooms/8-lg.jpg";
import ImageSlider1 from "@/public/assets/heroSlider/1.jpg";
import ImageSlider2 from "@/public/assets/heroSlider/2.jpg";
import ImageSlider3 from "@/public/assets/heroSlider/3.jpg";

import { NavItemType, RoomType, SliderItemType } from "@/types";

export const roomData: RoomType[] = [
  {
    id: "1",
    name: "Superior Room",
    description:
      "Experience elegant comfort in our Superior Room at Adina Hotel & SPA. Designed for business or leisure travelers, it features cozy interiors, modern furnishings, and relaxing views. Enjoy premium Wi-Fi, complimentary coffee, and full access to the pool and fitness area for a delightful stay.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: "2",
    name: "Signature Room",
    description:
      "The Signature Room at Adina Hotel & SPA combines luxury design with serene ambiance. Perfect for couples, it offers a spacious layout, a plush king bed, and stylish décor. Guests enjoy complimentary breakfast, high-speed Wi-Fi, and exclusive access to our pool, gym, and wellness facilities.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: "3",
    name: "Deluxe Room",
    description:
      "Relax in the Deluxe Room at Adina Hotel & SPA, where style meets tranquility. Featuring refined décor, comfortable bedding, and a serene atmosphere, this room ensures total comfort. Enjoy free Wi-Fi, premium coffee, a private bath, and access to all hotel amenities during your stay.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: "4",
    name: "Luxury Room",
    description:
      "The Luxury Room at Adina Hotel & SPA offers a perfect blend of sophistication and warmth. Ideal for families or friends, it features spacious interiors, elegant furnishings, and modern amenities. Guests enjoy breakfast, pool access, fitness facilities, and personalized service every day.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: "5",
    name: "Luxury Suite Room",
    description:
      "Indulge in pure comfort with the Luxury Suite Room at Adina Hotel & SPA. This spacious suite offers a separate lounge, premium bedding, and panoramic views. Enjoy high-speed Wi-Fi, in-room coffee, breakfast, and full access to our swimming pool, spa, and modern fitness center.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: "6",
    name: "Deluxe Room",
    description:
      "Enjoy refined relaxation in the Deluxe Room at Adina Hotel & SPA. With tasteful décor, quality bedding, and soft lighting, this room is perfect for families or groups. Complimentary Wi-Fi, rich breakfast, a swimming pool, and gym access create an unforgettable hotel experience.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: "7",
    name: "Luxury Room",
    description:
      "Step into the Luxury Room at Adina Hotel & SPA and enjoy timeless comfort with modern charm. Spacious, bright, and elegantly styled, it’s ideal for longer stays. Guests benefit from free Wi-Fi, breakfast, pool and gym access, plus the signature service of our wellness-focused hotel.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: "8",
    name: "Deluxe Room",
    description:
      "Discover exceptional comfort in the Deluxe Room at Adina Hotel & SPA. Featuring modern design, soft bedding, and a calming atmosphere, it’s perfect for relaxation. Enjoy complimentary Wi-Fi, coffee, breakfast, and access to our pool, gym, and wellness area throughout your stay.",
    facilities: [
      { name: "Wifi", icon: FaWifi },
      { name: "Coffee", icon: FaCoffee },
      { name: "Bath", icon: FaBath },
      { name: "Parking Space", icon: FaParking },
      { name: "Swimming Pool", icon: FaSwimmingPool },
      { name: "Breakfast", icon: FaHotdog },
      { name: "GYM", icon: FaStopwatch },
      { name: "Drinks", icon: FaCocktail },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];

export const navLinks: NavItemType[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "#" },
  { label: "Restaurant", href: "#" },
  { label: "Spa", href: "#" },
  { label: "Contact", href: "#" },
];

export const sliderList: SliderItemType[] = [
  {
    id: "1",
    title: "Your Luxury Hotel For Vacation",
    image: ImageSlider1,
  },
  {
    id: "2",
    title: "Your Luxury Hotel For Vacation",
    image: ImageSlider2,
  },
  {
    id: "3",
    title: "Your Luxury Hotel For Vacation",
    image: ImageSlider3,
  },
];
