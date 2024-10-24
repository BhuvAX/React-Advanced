

# CSS Alternatives and Type Safety - Prop Types

## Topics covered in this section of course
1. CSS Alternatives
    - CSS Modules
    - CSS in JS
    - Utility CSS
    - CSS Frameworks
2.  Type Safety
    - PropTypes
    - Typescript setup and Props
    - Typescript useState
    - Typescript useRef
    - Typescript useReducer
    - Typescript useContext
    - Typescript Generic Component
## Learnings
### 1.1 CSS Modules
CSS Modules in React provide a way to scope CSS by automatically generating unique class names. This helps to avoid class name conflicts in large applications by localizing styles to the component they are used in.

#### Key Features of CSS Modules
-   **Scoped Styles**: CSS styles are scoped to the component, preventing clashes with styles from other components.
-   **Unique Class Names**: CSS Modules automatically generate unique class names, ensuring styles are applied correctly.
-   **Ease of Maintenance**: Scoped styles improve the maintainability of the codebase, making it easier to understand and modify component-specific styles.

#### How to Use CSS Modules in React
1. **Setting Up CSS Modules**
	- For a React project created with Create React App (CRA), CSS Modules are supported out of the box. Files with the `.module.css` extension will automatically be treated as CSS Modules.

2. **Creating a CSS Module**
	- Create a CSS file with the `.module.css` extension.
		```css
		/* Button.module.css */
		.button {
		  background-color: blue;
		  color: white;
		  padding: 10px 20px;
		  border: none;
		  border-radius: 5px;
		}

		.buttonPrimary {
		  background-color: darkblue;
		}
		```
3. **Importing and Using CSS Module in a Component**
	- Import the CSS module in your React component and apply the styles using the imported object.
		```jsx
		// Button.js
		import React from 'react';
		import styles from './Button.module.css';

		function Button({ primary, children }) {
		  return (
		    <button className={`${styles.button} ${primary ? styles.buttonPrimary : ''}`}>
		      {children}
		    </button>
		  );
		}

		export default Button;
		``` 

4. **Example Usage**
	```jsx
	// App.js
	import React from 'react';
	import Button from './Button';

	function App() {
	  return (
	    <div>
	      <Button>Default Button</Button>
	      <Button primary>Primary Button</Button>
	    </div>
	  );
	}

	export default App;
	```

#### Explanation

1.  **Creating a CSS Module**: In the `Button.module.css` file, styles are defined for a button. Notice the class names `.button` and `.buttonPrimary`.
    
2.  **Importing CSS Module**: In `Button.js`, the styles are imported using the `import styles from './Button.module.css';` syntax. The `styles` object contains the class names with their respective unique identifiers.
    
3.  **Applying Styles**: The `button` element's className is set using the classes from the `styles` object. Conditional styling is applied based on the `primary` prop.
    
4.  **Example Usage**: The `Button` component is used in `App.js` with and without the `primary` prop to demonstrate how different styles can be applied.
    

### Advantages of CSS Modules

-   **Isolation**: Styles are scoped to the component, preventing conflicts and unintended style overrides.
-   **Maintainability**: With localized styles, components are easier to manage, and styles are more predictable.
-   **Readability**: Class names are automatically generated to be unique, making it clear where each style is applied.

#### Limitations
-   **Complexity**: For very simple projects, CSS Modules might add unnecessary complexity.
#### Conclusion
CSS Modules offer a robust way to handle styles in React applications by scoping styles to components, avoiding conflicts, and improving maintainability. They are a valuable tool for any React developer looking to manage styles in a scalable and modular way.
### 2.2 CSS in JS
 CSS-in-JS is a styling approach in React where JavaScript is used to define CSS styles. This method provides dynamic styling capabilities and scopes styles to components, avoiding global CSS pitfalls. One popular library for CSS-in-JS in React is `styled-components`.

1.  #### Key Features of `styled-components`
	- **Tagged Template Literals**: Use tagged template literals to write actual CSS in your JavaScript code.
	- **Dynamic Styling**: Easily create dynamic styles based on component props.
	- **Automatic Critical CSS**: Only the styles of components being rendered are loaded.
	- **Component-Level Styles**: Scoped styles to the component level, preventing style clashes.
	- **Extending Styles**: Extend existing styled components for more advanced use cases.

2. #### How to Use `styled-components`
	-  **Installation**: First, you need to install `styled-components`:
		 `npm install styled-components` 
		 
	- **Creating a Styled Component**: You can create a styled component using the `styled` function.
		```jsx
		// Button.jsx
		import styled from 'styled-components';

		const Button = styled.button`
		  background-color: blue;
		  color: white;
		  padding: 10px 20px;
		  border: none;
		  border-radius: 5px;
		  cursor: pointer;

		  &:hover {
		    background-color: darkblue;
		  }
		`;

		export default Button;
		``` 

	- **Using the Styled Component**: Import and use the styled component in your React component.
		```jsx
		// App.jsx
		import React from 'react';
		import Button from './Button';

		function App() {
		  return (
		    <div>
		      <Button>Click Me</Button>
		    </div>
		  );
		}

		export default App;
		``` 

3. #### Dynamic Styling: 
	You can use props to create dynamic styles in `styled-components`.
	```jsx
	// Button.jsx
	import styled from 'styled-components';

	const Button = styled.button`
	  background-color: ${props => props.primary ? 'darkblue' : 'blue'};
	  color: white;
	  padding: 10px 20px;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;

	  &:hover {
	    background-color: ${props => props.primary ? 'navy' : 'darkblue'};
	  }
	`;

	export default Button;
	``` 
	```jsx
	// App.jsx
	import React from 'react';
	import Button from './Button';

	function App() {
	  return (
	    <div>
	      <Button primary>Primary Button</Button>
	      <Button>Default Button</Button>
	    </div>
	  );
	}

	export default App;
	``` 

4. #### Extending Styles
	You can extend existing styled components to create new ones with additional styles.
	```jsx
	// Button.jsx
	import styled from 'styled-components';

	const Button = styled.button`
	  background-color: blue;
	  color: white;
	  padding: 10px 20px;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;

	  &:hover {
	    background-color: darkblue;
	  }
	`;

	const PrimaryButton = styled(Button)`
	  background-color: darkblue;

	  &:hover {
	    background-color: navy;
	  }
	`;

	export { Button, PrimaryButton };
	``` 

5. #### Key Benefits of `styled-components`:
	- **Scoped Styles**: Ensures styles are scoped to components, preventing clashes.
	-  **Dynamic Styling**: Easily create styles based on component props.
	-  **Maintainability**: Styles are colocated with components, making it easier to maintain.
	-  **CSS Features**: Leverage the full power of CSS, including nesting, media queries, and more.
	-  **Server-Side Rendering (SSR)**: Supports SSR, making it suitable for universal React applications.

6. #### Considerations
	-   **Performance**: While `styled-components` are performant, they can introduce runtime overhead.
	-   **Learning Curve**: Requires understanding of tagged template literals and JavaScript-driven styling.
	-   **Tooling**: Requires installation and setup, which might be an additional step compared to plain CSS.

7. #### Conclusion:
	`styled-components` offer a powerful, scalable, and maintainable way to style React applications. By keeping styles scoped to components and allowing dynamic styling through props, `styled-components` simplify the styling process and enhance the developer experience. Whether you're building small components or large applications, `styled-components` provide a robust solution for CSS-in-JS in React.

### 2.3 Utility CSS
Utility CSS is a modern approach to styling that focuses on using small, single-purpose classes to construct styles directly in your HTML or JSX. Tailwind CSS is one of the most popular utility-first CSS frameworks, providing a wide array of utility classes to help you build custom designs without writing CSS.
1. #### Key Features of Tailwind CSS:
	- **Utility-First**: Provides low-level utility classes to build custom designs.
	- **Responsive Design**: Built-in support for responsive design using media query utilities.
	-  **Customization**: Highly customizable via configuration files.
	-  **Purging Unused CSS**: Efficiently removes unused CSS for optimized performance.
	- **Variants**: Supports pseudo-classes (like `:hover`, `:focus`), media queries, and state-based styling.
2. #### How to Use Tailwind CSS in a React Project.
	- Install and configure tailwind CSS in vite as per this [doc](https://tailwindcss.com/docs/guides/vite)
	- Now you can use Tailwind's utility classes in your JSX:
		```jsx
		// App.jsx
		import React from 'react';

		function App() {
		  return (
		    <div className="min-h-screen flex items-center justify-center bg-gray-100">
		      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
		        <h1 className="text-2xl font-bold mb-4">Welcome to Tailwind CSS</h1>
		        <p className="text-gray-700 mb-4">
		          This is a simple example of using Tailwind CSS in a React project.
		        </p>
		        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
		          Get Started
		        </button>
		      </div>
		    </div>
		  );
		}

		export default App;
		```
3. #### Benefits of Using Tailwind CSS
	- **Rapid Prototyping**: Quickly build designs with utility classes.
	- **Consistency**: Ensure consistent spacing, colors, and typography across your project.
	- **No Custom CSS**: Avoid writing custom CSS by using utility classes.
	-  **Responsive Design**: Easily create responsive designs with built-in responsive utilities.
	-  **Customization**: Tailwind can be customized extensively to match your design system.
4. #### Conclusion
Tailwind CSS offers a utility-first approach to styling in React, which can lead to faster development and more maintainable code. By using utility classes directly in your JSX, you can create responsive, consistent, and easily customizable designs without writing custom CSS. Tailwind's extensive configuration options and built-in utilities make it a powerful tool for modern React development.
### 2.4 CSS Frameworks:
CSS frameworks provide a set of predefined styles and components that can help you quickly build responsive and aesthetically pleasing web applications. When using React, integrating a CSS framework can simplify the development process, as it provides ready-to-use styles and components. One of the most popular CSS frameworks is Bootstrap, and there are specific libraries to integrate Bootstrap with React.
#### Setting Up React-Bootstrap
1. **Install Bootstrap and React-Bootstrap**: You need to install both Bootstrap and React-Bootstrap packages via npm or yarn.
    `npm install bootstrap react-bootstrap`
 2. **Using React-Bootstrap Components**
 React-Bootstrap provides React components that you can use to build your UI. Here are some examples:
	- **Button Component** 
		```jsx
		import React from 'react';
		import { Button } from 'react-bootstrap';

		function App() {
		  return (
		    <div className="App">
		      <Button variant="primary">Primary Button</Button>
		    </div>
		  );
		}

		export default App;
		```
	- **Grid Component** 
		```jsx
		import React from 'react';
		import { Container, Row, Col } from 'react-bootstrap';

		function App() {
		  return (
		    <Container>
		      <Row>
		        <Col sm={8}>sm=8</Col>
		        <Col sm={4}>sm=4</Col>
		      </Row>
		    </Container>
		  );
		}

		export default App;
		```
	- **Form Component**
		```jsx
		import React from 'react';
		import { Form, Button } from 'react-bootstrap';

		function App() {
		  return (
		    <div className="App">
		      <Form>
		        <Form.Group controlId="formBasicEmail">
		          <Form.Label>Email address</Form.Label>
		          <Form.Control type="email" placeholder="Enter email" />
		          <Form.Text className="text-muted">
		            We'll never share your email with anyone else.
		          </Form.Text>
		        </Form.Group>

		        <Form.Group controlId="formBasicPassword">
		          <Form.Label>Password</Form.Label>
		          <Form.Control type="password" placeholder="Password" />
		        </Form.Group>
		        <Button variant="primary" type="submit">
		          Submit
		        </Button>
		      </Form>
		    </div>
		  );
		}

		export default App;
		```
3. **Benefits of Using React-Bootstrap:**
	- **Consistency**: Provides a consistent design language across your application.
	- **Responsiveness**: Built-in responsive design elements help you create mobile-first applications.
	- **Ease of Use**: Simplifies the process of adding styles and components.
	- **Integration**: Seamless integration with React, allowing you to use Bootstrap components as React components.
	- **Customization**: Easily customizable using Bootstrap's utility classes and theme variables.

4. **Conclusion:**
Using a CSS framework like Bootstrap in your React applications can significantly speed up development and ensure a consistent, responsive design. React-Bootstrap provides a set of React components that wrap Bootstrap's styles and components, making it easy to use Bootstrap with React. By leveraging these pre-built components and styles, you can focus more on building functionality and less on styling, leading to faster and more efficient development.
### 2.1 PropTypes
Type safety in React refers to ensuring that the types of the props passed to a component are the expected types. This helps in catching bugs early in the development process, making the code more robust and maintainable. One common way to enforce type safety in React is by using the `prop-types` library.
#### Prop-Types in React
`prop-types` is a library that allows you to define the types and requirements of the props that a component should receive. By specifying prop types, you can catch errors in the props passed to a component during development.

#### Installation:
First, you need to install the `prop-types` package:
`npm install prop-types`
#### Usage:
Here's how you can use `prop-types` to enforce type safety in your React components:
1.  **Import PropTypes**:
    `import PropTypes from 'prop-types';` 
    
2.  **Define Prop Types**:
    You can define the types of the props in your component by adding a `propTypes` static property to your component.
	```jsx
	import React from 'react';
	import PropTypes from 'prop-types';

	function Greeting({ name, age, isMember }) {
	  return (
	    <div>
	      <h1>Hello, {name}!</h1>
	      <p>Age: {age}</p>
	      <p>Membership Status: {isMember ? 'Member' : 'Non-member'}</p>
	    </div>
	  );
	}

	Greeting.propTypes = {
	  name: PropTypes.string.isRequired,
	  age: PropTypes.number.isRequired,
	  isMember: PropTypes.bool,
	};

	Greeting.defaultProps = {
	  isMember: false,
	};

	export default Greeting;
	``` 
    
3.  **Run-time Type Checking**:    
    PropTypes perform run-time type checking for the props. If a prop is passed with a wrong type, a warning will be shown in the console.

#### Benefits of Using PropTypes
1.  **Error Prevention**: Helps prevent bugs by catching incorrect prop types during development.
2.  **Documentation**: Serves as a form of documentation, indicating the expected types and requirements for each prop.
3.  **Defaults**: Allows you to set default values for props, ensuring your components have sensible defaults.

#### Conclusion
Using `prop-types` in React is an effective way to enforce type safety for your components. It helps catch errors early, provides better documentation for your components, and ensures that your components behave as expected. While PropTypes offer run-time type checking, for more robust compile-time type checking, you might also consider using TypeScript. However, PropTypes remain a popular choice for many React developers due to their simplicity and ease of integration. 
