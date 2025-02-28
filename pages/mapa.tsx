// pages/mapa.tsx
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Carregar o componente de mapa dinamicamente, sem SSR
const MapaComponent = dynamic(() => import('../components/MapaComponent'), { ssr: false });

const MapaPage = () => {
  return (
    
    <header className=''>
      <div className='logo'>
      <span>Eco</span>
      <span className="green">City</span>
      </div>
      <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/mapa">Zonas de Coleta</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      <h1>Página do Mapa</h1>
      <MapaComponent />
    </header>
  );
};

export default MapaPage;
