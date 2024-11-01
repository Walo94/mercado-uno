import { Typography, Button } from "@mui/material";
import banner from "../assets/img/banner2.png";
import { ArrowDownToLine} from 'lucide-react';
import ProductHome from "../components/ProductHome";

function Home() {
  return (
    <div
      className="relative w-full h-screen max-h-[500px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className="relative flex flex-col items-center justify-center h-full pl-8">
        <Typography variant="h4" className="text-white mb-4 text-center">
          Única plataforma de comercio electrónico para empresas de calzado y sus derivados
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderColor: '#046bc9',
            color: "#046bc9",
            backgroundColor: "white",
            marginTop: "32px",
            padding: "12px 24px",
            fontSize: "18px",
            '&:hover': {
              backgroundColor: '#046bc9', 
              color: '#ffffff', 
            },
          }}
        >
          Ver Más <ArrowDownToLine />
        </Button>
      </div>
      <ProductHome/>
    </div>
  );
}

export default Home;
