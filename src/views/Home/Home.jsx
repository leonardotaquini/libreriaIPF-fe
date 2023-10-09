import { Navbar } from '../../components/Navbar/Navbar'
import { Libros } from '../../components/Libros/Libros'
export const Home = () => {
  return (
    <>
      <div className="d-flex vh-100 flex-column">
        <Navbar />
        <Libros />
      </div>
    </>
  );
};
