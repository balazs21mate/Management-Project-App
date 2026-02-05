export default function Section({ children }) {
  return (
    <section className="flex flex-col justify-center items-center w-4/5 bg-transparent">
      {children}
    </section>
  );
}
