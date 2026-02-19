export default function Section({ children }) {
  return (
    <section className="flex flex-col mt-40 items-center w-4/5 bg-transparent pr-60 pl-20">
      {children}
    </section>
  );
}
