import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import logo from '../../images/Q3-Pic1.PNG';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5 border border-2 border-primary rounded-2 my-4'>
            <h1 className='fs-2 text-center mt-2 mb-3 text-primary'>Some Frequently Asked Questions</h1>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong className='fs-5'>Question #1: What is the Purpose of React Router?</strong></Accordion.Header>
                    <Accordion.Body>
                        <h4 className='fs-5 text-primary font-bold'>Answer: </h4>
                        <p>
                            <strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Purpose of React Router is given below:
                        </p>
                        <p>
                            React Router is declarative which means that you specify what you want your route to look like, rather than specifying how to get there. This makes it more user-friendly and easier to read. React Router is modular so that you can use only the features you need, rather than having to include everything in the library. This makes it more lightweight and efficient. Besides, React Router is asynchronous that routes can be loaded on-demand, rather than all at once. This makes the application more responsive and efficient. Finally, React Router is composable which means that you can create complex routes by combining multiple routes together. This makes the routing process more flexible.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong className='fs-5'>Question #2: How does Context API works?</strong></Accordion.Header>
                    <Accordion.Body>
                        <h4 className='fs-5 text-primary font-bold'>Answer:</h4>
                        <p>
                            <strong>Context API:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        </p>
                        <p>
                            The Context API gives you a dependency injection system based on your component tree. This wasn’t possible in React before and it also integrates very well with function components and hooks. In situations where you have logic and configuration that needs to be accessed by multiple components but doesn’t interact with or depend on external modules, writing your own contexts can be beneficial.
                        </p>
                        <p>
                            A good example would be a UI library that needs to function independently from the applications using it but still needs a better way of sharing data than passing everything through props. In a UI library, the tree-based scoping is very useful because, for example, you can override the theme of your components in just a part of your application. We can also imagine a calendar component with a ton of components and logic. In this case, we can build multiple contexts that help to manage all of its internal events and configurations and they won’t be affected by any other instance of this widget.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong className='fs-5'>Question #3: What is useRef hook in React?</strong></Accordion.Header>
                    <Accordion.Body>
                        <h4 className='fs-5 text-primary font-bold'>Answer: </h4>
                        <p>
                            <strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Purpose of React Router is given below:
                        </p>
                        <p>
                            React Router is declarative which means that you specify what you want your route to look like, rather than specifying how to get there. This makes it more user-friendly and easier to read. React Router is modular so that you can use only the features you need, rather than having to include everything in the library. This makes it more lightweight and efficient. Besides, React Router is asynchronous that routes can be loaded on-demand, rather than all at once. This makes the application more responsive and efficient. Finally, React Router is composable which means that you can create complex routes by combining multiple routes together. This makes the routing process more flexible.
                        </p>
                        <div className='text-center mb-3'>
                            <img className=' w-50 h-25' src={logo} alt="" />
                        </div>
                        <p>
                            In this example, there is a button called ACTION, whenever we click on the button the onClickHandler is getting triggered and it’s focusing the textarea with help of useRef hook. The focusPoint is the useRef object which is initialized to null and the value is changing to onClick event.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
};

export default Blogs;