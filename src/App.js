import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Topics from './components/Topics/Topics';
import Error from './components/ErrorPage/Error';
import Blogs from './components/Blogs/Blogs';
import { LoadQuizData } from './components/LoaderFunction/LoadQuizData';
import Chart from './components/Chart/Chart';
import TopicDetails from './components/TopicDetails/TopicDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Teacher1Details from './components/Teacher1Details/Teacher1Details';
import Teacher2Details from './components/Teacher2Details/Teacher2Details';
import Teacher3Details from './components/Teacher3Details/Teacher3Details';
import Teacher4Details from './components/Teacher4Details/Teacher4Details';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import StartPage from './components/StartPage/StartPage';
import Signin from './components/Signin/Signin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        // {
        //   path: '/',
        //   element:<HomePage></HomePage>
        // },

        // {
        //   path: '/home',
        //   element:<HomePage></HomePage>
        // },

        {
          path: '/',
          element: <StartPage></StartPage>
        },

        {
          path: '/home',
          element: <StartPage></StartPage>
        },


        {
          path: '/register',
          element: <Registration></Registration>
        },

        // {
        //   path: '/login',
        //   element:<Login></Login>
        // },

        {
          path: '/login',
          element:<Signin></Signin>
        },
        
        {
          path: '/topics',
          loader:LoadQuizData,
          element: <PrivateRoute><Topics></Topics></PrivateRoute>
        },

        {
          path: '/topics',
          loader: async () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },

        {
          path: '/topics/:topicId',
          loader: async ({params}) => {
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<TopicDetails></TopicDetails>
        },

        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },

        {
          path: '/charts',
          loader: LoadQuizData,
          element: <Chart></Chart>
        },

        {
          path: '/about',
          element: <PrivateRoute><About></About></PrivateRoute>
        },

        {
          path: '/about/teacher1details',
          element: <Teacher1Details></Teacher1Details>
        },

        {
          path: '/about/teacher2details',
          element: <Teacher2Details></Teacher2Details>
        },

        {
          path: '/about/teacher3details',
          element: <Teacher3Details></Teacher3Details>
        },

        {
          path: '/about/teacher4details',
          element: <Teacher4Details></Teacher4Details>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
