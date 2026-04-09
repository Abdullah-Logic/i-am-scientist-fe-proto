import CertificateVerificationForm from "../components/CertificateVerificationForm";
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <main className="min-h-screen flex items-center justify-center bg-[#1E0243] py-10">
        <div className="w-full max-w-2xl">
          <h1 className="font-misri md:text-5xl text-white text-4xl font-bold mb-8 text-center">
            Certificate Verification
          </h1>
          <CertificateVerificationForm />
        </div>
      </main>
    </Container>
  );
}
