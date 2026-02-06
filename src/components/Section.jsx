export default function Section({ children }) {
  return (
    <section className="flex flex-col lg:mt-40 items-center w-4/5 bg-transparent">
      {children}
    </section>
  );
}
