import Footer from "./Footer";
import Header from "./Header";



export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header/>
      <main className="flex-grow h-full bg-cover bg-center m-0 p-0">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
