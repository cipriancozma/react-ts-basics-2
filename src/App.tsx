import Button from "./components/Button";
// import Input from "./components/Input";

function App() {
  return (
    <main>
      {/* <Input id="name" type="text" label="Your Name" />
      <Input id="age" type="number" label="Your Age" /> */}
      <p>
        <Button>Button 1</Button>
      </p>
      <p>
        <Button href="https://www.google.com">Button 2 (Link)</Button>
      </p>
    </main>
  );
}

export default App;
