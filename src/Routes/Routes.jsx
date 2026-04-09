import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import BooksPage from "../Pages/BooksPage/BooksPage";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import { Suspense } from "react";
import CustomizeLabels from "../Component/Chart/CustomizeLabels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <BooksPage></BooksPage>
      },
      {
        path: "/books/:id",
        element: <Suspense fallback={
          <div><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span></div>
        }>
          <BookDetails></BookDetails>
        </Suspense>,
        loader: () => fetch("/booksData.json")
      },
      {
        path: "/page-to-read",
        element: <CustomizeLabels></CustomizeLabels>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);