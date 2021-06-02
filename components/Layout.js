import Navb from "./navb";

function Layout({ children }) {
  return (
    <div>
      <h3>My Layout Start</h3>
      <Navb />
      {children}
      <h3>My Layout End</h3>
    </div>
  );
}

export default Layout;
