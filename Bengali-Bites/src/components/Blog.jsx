import React from 'react';

const Blogs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <a href="/blogs/uncontrolled-controlled-components" className="block hover:bg-gray-100 transition duration-300">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Differences between uncontrolled and controlled components</h2>

              <p className="text-gray-500 mb-2">In React, a controlled component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component controls it by handling the callback and managing its own state, and passes the updated value as props to the controlled component. This way, the parent component has complete control over the value of the component.</p>
              <p className="text-gray-500 mb-2">John Doe</p>
              <p className="text-gray-500">May 1, 2023</p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <a href="/blogs/validate-react-props-proptypes" className="block hover:bg-gray-100 transition duration-300">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">How to validate React props using PropTypes</h2>
              <p className="text-gray-500 mb-2">PropTypes is a package that is used to validate the props of a React component. To use PropTypes, you need to import it at the top of your component file:</p>
              <p className="text-gray-500 mb-2">Jane Smith</p>
              <p className="text-gray-500">April 25, 2023</p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <a href="/blogs/nodejs-expressjs-differences" className="block hover:bg-gray-100 transition duration-300">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Difference between Node.js and Express.js</h2>
              <p className="text-gray-500 mb-2">Node.js is a runtime environment that executes JavaScript code outside of a web browser. It is built on top of the V8 JavaScript engine and allows developers to build server-side applications using JavaScript. Node.js provides many built-in modules for tasks such as working with the file system, networking, and creating HTTP servers.</p>
              <p className="text-gray-500 mb-2">Bob Johnson</p>
              <p className="text-gray-500">April 15, 2023</p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <a href="/blogs/custom-hooks" className="block hover:bg-gray-100 transition duration-300">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">What is a custom hook and why create one</h2>
              <p className="text-gray-500 mb-2">A custom hook is a function that uses built-in React hooks to provide functionality that can be reused across multiple components. Custom hooks allow you to abstract away complex logic into reusable functions that can be shared across your application.</p>
              <p className="text-gray-500 mb-2">Sally Lee</p>
              <p className="text-gray-500">April 10, 2023</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
