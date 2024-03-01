"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Navbar from '../../../../../components/navbar'
import { Input, Text } from '@chakra-ui/react'
import { collection,addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../../firebase';



function AddNews() {
      const [title, setTitle] = useState<string>('');
      const [body, setBody] = useState<string>('');
      const [brief, setBrief] = useState<string>('');

      // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      // setValue(event.target.value);
      // };
      const addPostToFirebase = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            await addDoc(collection(db, "articles"), {
                  bannerImage: "dfnaodfa",
                  body: body,
                  category: "dfs",
                  brief: brief,
                  title: title,
                  postLength: "5",
                  author: "ahadan@gmail.com",
                  postedOn:serverTimestamp()
      
            })
      }
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
      <Navbar isGray={true} />
      <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
            {/* heading */}
            <div className='flex items-center space-x-3'>
                  <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                  <h1 className='text-gray-600 text-3xl font-extrabold'>CONTACT</h1>
            </div>
            <div>
                  <Text mb='8px'>title: {title}</Text>
                  <Input
                  value={title}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                  onChange={event => setTitle(event.target.value)}
                  />
            </div>
            <div>
                  <Text mb='8px'>body: {body}</Text>
                  <Input
                  value={body}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                  onChange={event => setBody(event.target.value)}
                  />
            </div>
            <div>
                  <Text mb='8px'>brief: {brief}</Text>
                  <Input
                  value={brief}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                  onChange={event => setBrief(event.target.value)}
                  />
            </div>
            <button type='submit' onClick={() => addPostToFirebase}>submit</button>
      </div>
</div>
  )
}

export default AddNews