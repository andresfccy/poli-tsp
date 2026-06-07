import type { Product } from '../types/domain';

const imageBaseUrl = 'https://images.unsplash.com';

export const products: Product[] = [
  {
    id: 'audifonos-bluetooth-neo',
    name: 'Audifonos Bluetooth Neo',
    image: `${imageBaseUrl}/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80`,
    price: 189900,
    stock: 18,
    category: 'Audio',
    brand: 'NovaTech',
    characteristics: ['Bluetooth 5.3', 'Cancelacion pasiva', 'Estuche de carga'],
    description:
      'Audifonos inalambricos compactos para clases, llamadas y musica diaria, con buena autonomia y ajuste comodo.',
  },
  {
    id: 'teclado-mecanico-aula',
    name: 'Teclado Mecanico Aula',
    image: `${imageBaseUrl}/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80`,
    price: 249900,
    stock: 12,
    category: 'Computacion',
    brand: 'KeyLab',
    characteristics: ['Switches rojos', 'Iluminacion blanca', 'Formato TKL'],
    description:
      'Teclado mecanico de formato compacto para programacion, escritura prolongada y escritorios pequenos.',
  },
  {
    id: 'mouse-ergonomico-pro',
    name: 'Mouse Ergonomico Pro',
    image: `${imageBaseUrl}/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80`,
    price: 119900,
    stock: 25,
    category: 'Computacion',
    brand: 'KeyLab',
    characteristics: ['Sensor 7200 DPI', 'Conexion USB', 'Diseno ergonomico'],
    description:
      'Mouse preciso y comodo para jornadas de estudio, diseno o navegacion intensiva.',
  },
  {
    id: 'monitor-led-24',
    name: 'Monitor LED 24 pulgadas',
    image: `${imageBaseUrl}/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80`,
    price: 649900,
    stock: 9,
    category: 'Computacion',
    brand: 'ViewMax',
    characteristics: ['Full HD', '75 Hz', 'HDMI'],
    description:
      'Monitor Full HD para ampliar el espacio de trabajo, revisar documentos y desarrollar proyectos con comodidad.',
  },
  {
    id: 'soporte-laptop-ajustable',
    name: 'Soporte Ajustable para Laptop',
    image: `${imageBaseUrl}/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80`,
    price: 89900,
    stock: 32,
    category: 'Accesorios',
    brand: 'DeskUp',
    characteristics: ['Aluminio', 'Plegable', 'Altura ajustable'],
    description:
      'Soporte liviano para mejorar la postura y mantener el portatil ventilado durante sesiones largas.',
  },
  {
    id: 'morral-antirrobo-campus',
    name: 'Morral Antirrobo Campus',
    image: `${imageBaseUrl}/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80`,
    price: 159900,
    stock: 16,
    category: 'Accesorios',
    brand: 'UrbanPack',
    characteristics: ['Puerto USB', 'Compartimento laptop', 'Tela impermeable'],
    description:
      'Morral funcional para transportar portatil, cuadernos y accesorios con compartimentos seguros.',
  },
  {
    id: 'camara-web-hd',
    name: 'Camara Web HD',
    image: `${imageBaseUrl}/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=900&q=80`,
    price: 139900,
    stock: 14,
    category: 'Video',
    brand: 'Streamio',
    characteristics: ['1080p', 'Microfono integrado', 'Clip universal'],
    description:
      'Camara web para reuniones, sustentaciones y clases virtuales con imagen clara en interiores.',
  },
  {
    id: 'microfono-usb-studio',
    name: 'Microfono USB Studio',
    image: `${imageBaseUrl}/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80`,
    price: 219900,
    stock: 10,
    category: 'Audio',
    brand: 'Streamio',
    characteristics: ['Conexion USB-C', 'Patron cardioide', 'Base metalica'],
    description:
      'Microfono de escritorio para grabar presentaciones, podcasts academicos y videollamadas con mejor claridad.',
  },
  {
    id: 'tablet-notas-10',
    name: 'Tablet para Notas 10',
    image: `${imageBaseUrl}/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80`,
    price: 899900,
    stock: 7,
    category: 'Movilidad',
    brand: 'NovaTech',
    characteristics: ['Pantalla 10 pulgadas', '64 GB', 'Lapiz compatible'],
    description:
      'Tablet versatil para leer, tomar apuntes, revisar clases y consultar recursos digitales.',
  },
  {
    id: 'power-bank-20000',
    name: 'Power Bank 20000 mAh',
    image: `${imageBaseUrl}/photo-1609592806596-4d8b5f9f1d96?auto=format&fit=crop&w=900&q=80`,
    price: 129900,
    stock: 21,
    category: 'Movilidad',
    brand: 'ChargeGo',
    characteristics: ['Carga rapida', 'USB-C', 'Doble salida'],
    description:
      'Bateria portatil de alta capacidad para mantener celular, audifonos o tablet activos durante todo el dia.',
  },
  {
    id: 'lampara-led-escritorio',
    name: 'Lampara LED de Escritorio',
    image: `${imageBaseUrl}/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80`,
    price: 99900,
    stock: 19,
    category: 'Escritorio',
    brand: 'DeskUp',
    characteristics: ['Luz regulable', 'Brazo flexible', 'Modo lectura'],
    description:
      'Lampara compacta para estudiar de noche, con intensidad ajustable y luz uniforme.',
  },
  {
    id: 'hub-usb-c-multi',
    name: 'Hub USB-C Multi Puerto',
    image: `${imageBaseUrl}/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80`,
    price: 149900,
    stock: 13,
    category: 'Accesorios',
    brand: 'ChargeGo',
    characteristics: ['HDMI', 'USB 3.0', 'Lector SD'],
    description:
      'Adaptador multi puerto para conectar pantalla, memorias y perifericos a portatiles modernos.',
  },
  {
    id: 'disco-ssd-1tb',
    name: 'Disco SSD Externo 1TB',
    image: `${imageBaseUrl}/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80`,
    price: 439900,
    stock: 8,
    category: 'Almacenamiento',
    brand: 'DataBox',
    characteristics: ['1 TB', 'USB-C', 'Transferencia rapida'],
    description:
      'Unidad externa compacta para respaldar proyectos, recursos multimedia y entregas academicas.',
  },
  {
    id: 'memoria-usb-128',
    name: 'Memoria USB 128GB',
    image: `${imageBaseUrl}/photo-1616004667892-d348f7349d39?auto=format&fit=crop&w=900&q=80`,
    price: 54900,
    stock: 40,
    category: 'Almacenamiento',
    brand: 'DataBox',
    characteristics: ['128 GB', 'USB 3.1', 'Carcasa metalica'],
    description:
      'Memoria practica para mover archivos, presentaciones y copias de seguridad ligeras.',
  },
  {
    id: 'silla-ergonomica-basic',
    name: 'Silla Ergonomica Basic',
    image: `${imageBaseUrl}/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80`,
    price: 549900,
    stock: 6,
    category: 'Escritorio',
    brand: 'DeskUp',
    characteristics: ['Soporte lumbar', 'Altura ajustable', 'Malla transpirable'],
    description:
      'Silla de trabajo para mejorar la comodidad durante sesiones largas de estudio o desarrollo.',
  },
  {
    id: 'base-refrigerante-laptop',
    name: 'Base Refrigerante Laptop',
    image: `${imageBaseUrl}/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80`,
    price: 109900,
    stock: 17,
    category: 'Computacion',
    brand: 'CoolDesk',
    characteristics: ['Doble ventilador', 'Inclinacion ajustable', 'USB'],
    description:
      'Base con ventilacion para portatiles que trabajan con varias aplicaciones abiertas o cargas intensivas.',
  },
  {
    id: 'parlante-bluetooth-mini',
    name: 'Parlante Bluetooth Mini',
    image: `${imageBaseUrl}/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80`,
    price: 99900,
    stock: 23,
    category: 'Audio',
    brand: 'NovaTech',
    characteristics: ['Bluetooth', 'Resistente a salpicaduras', '10 horas bateria'],
    description:
      'Parlante portatil para espacios pequenos, reuniones de equipo y reproduccion casual.',
  },
  {
    id: 'cable-usb-c-rapido',
    name: 'Cable USB-C Carga Rapida',
    image: `${imageBaseUrl}/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=900&q=80`,
    price: 34900,
    stock: 55,
    category: 'Accesorios',
    brand: 'ChargeGo',
    characteristics: ['1.5 metros', 'Carga rapida', 'Refuerzo trenzado'],
    description:
      'Cable resistente para carga diaria de celulares, tablets y accesorios compatibles con USB-C.',
  },
  {
    id: 'cuaderno-inteligente',
    name: 'Cuaderno Inteligente Reutilizable',
    image: `${imageBaseUrl}/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80`,
    price: 79900,
    stock: 20,
    category: 'Escritorio',
    brand: 'StudyLab',
    characteristics: ['Paginas reutilizables', 'App de escaneo', 'Marcador incluido'],
    description:
      'Cuaderno reutilizable para tomar notas, escanearlas y mantener ordenado el material de clase.',
  },
  {
    id: 'reloj-smart-lite',
    name: 'Reloj Smart Lite',
    image: `${imageBaseUrl}/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80`,
    price: 229900,
    stock: 11,
    category: 'Movilidad',
    brand: 'NovaTech',
    characteristics: ['Monitor cardiaco', 'Notificaciones', 'Bateria 7 dias'],
    description:
      'Reloj inteligente ligero para revisar notificaciones, actividad diaria y recordatorios de estudio.',
  },
];

export function getProductById(productId: string | undefined) {
  return products.find((product) => product.id === productId);
}
