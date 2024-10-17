/**
 * Coding Bootcamp Assignment: Props, Tertiary Operator, & Array Destructuring
 *
 * Instructions:
 * You will create three components that demonstrate the use of:
 * 1. Passing props to a component.
 * 2. The ternary operator.
 * 3. Array destructuring.
 * 
 * Follow the examples provided in the WelcomeMessage, CoinFlip, and FruitStore components to complete the assignment.
 * 
 * - Follow the TODO comments to complete each task.
 */

// TASK 1: Demonstrate the simple use of props

// EXAMPLE: Passing a prop to display a welcome message
function WelcomeMessage(props) {
  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Welcome Message</h2>
      <p>{`Welcome, ${props.name}!`}</p>
      <p>{`Your favorite color is ${props.color}.`}</p>
      
    </div>
  );
}



// TODO: Add your own component that uses props to display dynamic data
function UserInfo(props) {
  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">User Info</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

/* Pass props such as "name" and "age" to the component and display them. */

function PropsDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Props Demo</h1>

      <div>
        <WelcomeMessage name="Alice" color="blue"/>
        <WelcomeMessage name="Bob" color="red"/>
        <WelcomeMessage name="Carol" color="yellow"/>
        <WelcomeMessage name="Derek" color="green"/>
        <WelcomeMessage name="Emily" color="black"/>
        <WelcomeMessage name="Frank" color="white"/>
        <UserInfo name="John Doe" age={30} />

      </div>
      <div>
        TODO: Add your own component here demonstrating the use of props.
        
      </div>

    </div>
  );
}



// TASK 2: Use the ternary operator to display different content

// EXAMPLE: Tertiary operator usage in JSX and variable declaration
// CoinFlip component uses a ternary operator to determine what to show.
function CoinFlip(props) {
  let announcement = props.coinSide === 'heads' ? "Heads I win!" : "Tails you lose!";

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h1 className="text-lg">Coin flip</h1>
      <p>{announcement}</p>
      <img 
        src={props.coinSide === "heads" ? "./img/heads.webp" : "./img/tails.webp"}
        alt="result"
        className="h-32 w-32"
      />
    </div>
  );
}

// TODO: Create your own component that uses the ternary operator
function Weather(props) {
  const weatherMessage = props.temperature >85 ? "It's hot outside!" : "It's cool outside!";
  return (
    <div className="p-4 m-2 border-2 border-slate">
      <p>{weatherMessage}</p>
    </div>
  );
}
// Use the ternary operator to display a message based on the props passed (e.g., "temperature").

function TertiaryDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Tertiary Operator</h1>

      <div className="flex justify-around">
        <CoinFlip coinSide="heads" />
        <CoinFlip coinSide="tails" />
      </div>
      <div className="flex justify-around">
        <Weather temperature={80}/>
        <Weather temperature={60} />
      </div>

    </div>
  );
}

// TASK 3: Use array destructuring inside your component to extract array values

// Example for Array Destructuring: You can use a prop or declare an array inside your component.
// Example array: const [firstName, lastName] = ["John", "Doe"];

function FruitStore() {
  const fruits = ["apples", "blueberries", "cherries"];
  // Destructure the fruit array
  const [f1, f2, f3] = fruits;

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Three fruits!</h2>
      <p>Fruit 1: {f1}</p>
      <p>Fruit 2: {f2}</p>
      <p>Fruit 3: {f3}</p>
    </div>
  );
}

// TODO: Create your own component using array destructuring

function VehicleInfo() {
  const vehicle = ["Toyota", "Camry", 2020];
  const [make, model, year] = vehicle;

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Vehicle Info</h2>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
    </div>
  );
}
function ArrayDestructureDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Array Destructuring Demo</h1>

      <div>
        <FruitStore />
      </div>
      <div>
      <VehicleInfo/>
      </div>

    </div>
  );
}

// Render the App
function App() {
  return (
    <div>
      <PropsDemo />
      <hr className="border-blue-500 m-8"/>
      <TertiaryDemo />
      <hr className="border-blue-500 m-8"/>
      <ArrayDestructureDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
