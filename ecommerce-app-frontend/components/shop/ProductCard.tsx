import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur rounded-xl p-4 text-center"
    >
      <h4 className="font-semibold text-lg mb-2">{title}</h4>

      <p className="mb-3 text-gray-600">
        Price <span className="text-black font-semibold">$ {price}</span>
      </p>

      <div className="relative h-40 mb-4">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div className="flex justify-center gap-3">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Buy Now
        </button>
        <button className="border px-4 py-2 rounded">
          See More
        </button>
      </div>
    </motion.div>
  );
}