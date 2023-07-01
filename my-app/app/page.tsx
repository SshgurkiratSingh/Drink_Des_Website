import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/container";

export default function Home() {
  return (
    <div className="text-rose-500 text-2xl">
      <ClientOnly>
        <Container>
          <div className="hero min-h-screen ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">Welcome to Dispensor-6.2 Portal</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
}
