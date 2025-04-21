# React Brush-Up Notes 🚀

A personal guide to revisit core React concepts with code examples, interview notes, and practical understanding.

---

## 🔹 About React

React is a **JavaScript library** for building **user interfaces**, developed by Facebook. It follows a **component-based architecture**, allowing you to build reusable UI pieces.

- **Declarative**: You describe what the UI should look like, and React takes care of updating the DOM.
- **Component-Based**: UI is split into small, independent pieces called components. A piece of UI is called a component. In React a component is basically a function, which returns an HTML like syntax called the JSX
- **Learn Once, Write Anywhere**: You can use React for web, mobile (React Native), and even desktop (Electron).
- **State Driven**: Whenever we need to change something in the User Interface, we update something which we call the state.

---

## 🔹 Components

### 🧩 What are Components?

Components are the **building blocks** of a React app. A piece of UI when visualized. And code wise a component is a function returns JSX.

- **Functional Components** (Preferred now)

### ✅ Functional Component Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>
}
```

### ✅ JSX Reminder:

- JSX allows writing HTML-like code inside JavaScript.

- You can embed expressions with {}.

- className is used instead of class.

- Components should start with a capital letter.

## 🔹 Props

### 📦 What are Props?

Props (short for properties) allow passing data from parent to child component.

- Props are read-only.

- Used to make components reusable with dynamic data. **Very Important**

```jsx
function Greeting({ name }) {
  return <p>Welcome, {name}!</p>
}

;<Greeting name="Imran" />
```
