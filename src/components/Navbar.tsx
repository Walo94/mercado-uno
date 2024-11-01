import { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Button, InputBase, Select, MenuItem, FormControl } from '@mui/material';
import { Camera, Search, User, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';

// Lista de elementos
const items = [
  "¿Que estás buscando?",
  "Botas de escalar",
  "Zapatos de niño",
  "Botas militares",
  "Zapato de seguridad"
];

// Elementos del menú slider
const sliderItems = ["Botas", "Espumas", "Máquinaria", "Tenis", "Solventes", "Plantillas", "Pieles", "Zapatos"];

export default function Navbar() {
  const [placeholder, setPlaceholder] = useState(items[0]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % items.length;
      setPlaceholder(items[index]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (sliderContainerRef.current) {
        const containerWidth = sliderContainerRef.current.offsetWidth;
        const itemWidth = 180; // Ancho aproximado de cada elemento en px
        setItemsPerView(Math.floor(containerWidth / itemWidth));
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  const handleNext = () => {
    if (sliderIndex + itemsPerView < sliderItems.length) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const handlePrev = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 0, borderBottom: '1px solid #ccc' }}>
        <Toolbar className="flex justify-between">
          {/* Logo */}
          <a href="/" className="text-[#046bc9] text-2xl md:text-3xl font-bold ml-2">
            MercadoUno.mx
          </a>

          {/* Buscador */}
          <div className="flex-1 max-w-2xl mx-4 relative">
            <div className="flex items-center">
              <FormControl variant="outlined" sx={{ width: '140px', marginRight: '8px', height: '45px' }}>
                <Select
                  defaultValue="productos"
                  sx={{ height: '100%', '& .MuiSelect-select': { height: '100%', display: 'flex', alignItems: 'center' } }}
                >
                  <MenuItem value="productos">Productos</MenuItem>
                  <MenuItem value="fabricantes">Fabricantes</MenuItem>
                </Select>
              </FormControl>
              <div className="relative flex-1">
                <InputBase
                  type="text"
                  placeholder={placeholder}
                  className="w-full pl-10 pr-10 rounded"
                  sx={{ paddingLeft: '40px', paddingRight: '40px', border: '1px solid #ccc', borderRadius: '4px', height: '45px' }}
                />
                <Tooltip title="Buscar por imagen" arrow>
                  <Camera
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    size={20}
                  />
                </Tooltip>
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          {/* Carrito */}
          <span className="flex items-center text-[#046bc9] cursor-pointer space-x-1">
            <span>Carrito</span>
            <ShoppingCart size={22} color="#046bc9" />
          </span>

          {/* Botón de inicio de sesión */}
          <Button
            variant="outlined"
            color="primary"
            className="flex items-center space-x-2"
            sx={{
              borderColor: '#046bc9',
              color: '#046bc9',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                backgroundColor: '#046bc9',
                color: '#ffffff',
                '&:after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'right',
                },
                '& svg': {
                  color: '#ffffff',
                },
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: '#046bc9',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease',
                zIndex: 0,
              },
              height: '45px',
            }}
          >
            <User size={20} />
            <span style={{ position: 'relative', zIndex: 1 }}>Iniciar sesión</span>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Slider Horizontal */}
      <div className="flex items-center justify-center my-4 w-full">
        <button onClick={handlePrev} className="p-2" disabled={sliderIndex === 0}>
          <ChevronLeft size={24} />
        </button>
        <div ref={sliderContainerRef} className="flex overflow-hidden whitespace-nowrap w-full px-4">
          {sliderItems.slice(sliderIndex, sliderIndex + itemsPerView).map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}  // Cambia la URL según sea necesario
              className="mx-2 text-lg flex-1 text-center text-black transition-colors duration-300 hover:text-[#046bc9]"
            >
              {item}
            </a>
          ))}
        </div>
        <button onClick={handleNext} className="p-2" disabled={sliderIndex + itemsPerView >= sliderItems.length}>
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}
