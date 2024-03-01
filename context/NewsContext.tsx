"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import {collection, getDocs, setDoc ,doc} from 'firebase/firestore'
import {db} from '../firebase'

type NewsContextType = {
      users: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      posts: any[]; // Sesuaikan dengan tipe data yang sebenarnya
  }
  
  const initialContext: NewsContextType = {
      users: [],
      posts: []
  }
  
  const NewsContext = createContext<NewsContextType>(initialContext);
  
  type NewsProviderProps = {
      children: ReactNode;
  }
const NewsProvider = ({children}: NewsProviderProps) => {
      const [users, setUsers] = useState<any[]>([])
      const [posts, setPosts] = useState<any[]>([])
      
      useEffect(() => {
            const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            setUsers(querySnapshot.docs.map(doc => {
                  return {
                        id:doc.id,
                        data: {
                              ...doc.data()
                        }
                  }
            }));

      }
      
      getUsers()
      }, [])
      useEffect(() => {
            const getPosts = async () => {
                  const querySnapshot = await getDocs(collection(db, 'articles'));
                  setPosts(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    body: doc.data().body,
                                    brief: doc.data().brief,
                                    category: doc.data().category,
                                    bannerImage: doc.data().bannerImage,
                                    title: doc.data().title,
                                    postedOn: doc.data().postedOn.toDate(),
                                    author: doc.data().author,
                              }
                        }
                  }))
            }
            getPosts()

      }, [])
return (
      <NewsContext.Provider value={{ posts,users }}>
            {children}
      </NewsContext.Provider>
)
}


export {NewsContext, NewsProvider}