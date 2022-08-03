import Header from "./Header";

export default function defaultLayout({ children, bgImg }) {
  return (
    <div className="app-layout" style={{ backgroundImage: bgImg }}>
      <Header />
      <div className="content content--public">{children}</div>
    </div>
  );
}
