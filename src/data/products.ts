export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'cakes' | 'minicakes' | 'reposteria' | 'salados';
  customizable: boolean;
  image: string;
  priceNote?: string;
}

export const PRODUCTS: Product[] = [
  // MiniCakes
  {
    id: 'minicake-15',
    name: 'MiniCake de 15 cm',
    price: 2500,
    description: 'Exquisito cake de 15 cm. Masa de harina suave y esponjosa, ideal para celebraciones íntimas. Personalizable en sabor y colores.',
    category: 'minicakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop'
  },
  
  // Cakes Harina
  {
    id: 'cake-22-harina',
    name: 'Cake de 22 cm (Masa Harina)',
    price: 3500,
    description: 'Cake clásico de 22 cm elaborado con nuestra fina masa de harina. Perfecto para compartir en familia.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-bandeja-harina',
    name: 'Cake de Bandeja (Masa Harina)',
    price: 10700,
    description: 'Gran cake de bandeja con base de masa de harina, ideal para grandes eventos y cumpleaños multitudinarios.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'medio-cake-bandeja-harina',
    name: 'Medio Cake de Bandeja (Masa Harina)',
    price: 5300,
    description: 'Media porción del cake de bandeja clásico. Ideal para reuniones medianas.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop'
  },
  
  // Cakes Maicena
  {
    id: 'cake-20x8-maicena',
    name: 'Cake 20 cm x 8 cm de alto (Masa Maicena)',
    price: 3600,
    description: 'Delicado cake de maicena de 20 cm de diámetro y 8 cm de altura. Textura extra suave y ligera.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-20x15-maicena',
    name: 'Cake 20 cm x 15 cm de alto (Masa Maicena)',
    price: 5500,
    description: 'Alto y elegante cake de maicena (15 cm de altura). Una presentación de gran valor visual y decorativo.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e21187?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-bandeja-maicena',
    name: 'Cake de Bandeja (Masa Maicena)',
    price: 11200,
    description: 'Gran cake de bandeja elaborado con masa de maicena. Súper esponjoso, ideal para ocasiones muy especiales.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop'
  },
  
  // Especiales
  {
    id: 'cake-capuchino-22',
    name: 'Cake de Capuchino de 22 cm',
    price: 5700,
    priceNote: '5700 - 6500',
    description: 'Exquisito cake de capuchino embebido en almíbar aromático, decorado con merengue tradicional cubano. El precio varía (5700 - 6500) según la complejidad de la decoración.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-2-pisos',
    name: 'Cake de 2 Pisos (Redondo o Bandeja)',
    price: 16500,
    description: 'Impactante cake de 2 pisos diseñado a medida. Estructura estable y decoraciones artísticas para celebraciones principales.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-redondo-36',
    name: 'Cake Redondo de 36 cm',
    price: 15000,
    description: 'Imponente cake de 36 cm de diámetro para grandes eventos. Elaboración artesanal y acabados majestuosos.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-redondo-30',
    name: 'Cake Redondo de 30 cm',
    price: 10700,
    description: 'Clásico familiar de 30 cm de diámetro. Relleno y cobertura decorada con un diseño de alta gama a su elección.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cake-redondo-25',
    name: 'Cake Redondo de 25 cm',
    price: 5000,
    description: 'Perfecto para fiestas medianas. El equilibrio ideal entre tamaño, costo y una presentación sofisticada.',
    category: 'cakes',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop'
  },
  
  // Repostería
  {
    id: 'marquesitas-30',
    name: 'Bandeja de Marquesitas (30 unidades)',
    price: 4500,
    description: 'Fina repostería tradicional. Textura suave que se deshace en la boca, ideal para mesas de dulces de lujo.',
    category: 'reposteria',
    customizable: false,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'minidonas-chocolate',
    name: 'Minidonas cubiertas de Chocolate (unidad)',
    price: 45,
    description: 'Rosquillas esponjosas glaseadas con chocolate premium. Pedido mínimo recomendado: 20 unidades.',
    category: 'reposteria',
    customizable: false,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cupcake',
    name: 'Cupcake Decorado (unidad)',
    price: 130,
    description: 'Cupcakes esponjosos decorados con frosting de crema o merengue a tono con el evento. Pedido mínimo: 12 unidades.',
    category: 'reposteria',
    customizable: true,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop'
  },
  
  // Salados
  {
    id: 'cangrejitos-empanadillas',
    name: 'Cangrejitos / Empanadillas (unidad)',
    price: 35,
    description: 'Crujientes aperitivos salados ideales para complementar las fiestas. Hojaldre o masa artesanal dorada. Pedido mínimo: 25 unidades.',
    category: 'salados',
    customizable: false,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'croqueticas',
    name: 'Croqueticas Artesanales (unidad)',
    price: 25,
    description: 'Deliciosas croquetas de jamón o pollo súper cremosas por dentro y crujientes por fuera. Pedido mínimo: 30 unidades.',
    category: 'salados',
    customizable: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
  }
];
