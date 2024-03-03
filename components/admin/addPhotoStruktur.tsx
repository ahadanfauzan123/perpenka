"use client"
import React, {useState, ChangeEvent} from 'react'

import { LuUploadCloud } from "react-icons/lu";
import { Input, Text } from '@chakra-ui/react';
import { storage } from '../../firebase';
import  {ref,   uploadBytesResumable, UploadTaskSnapshot} from 'firebase/storage'
function AddPhotoStruktur() {
      const [value, setValue] = useState<string>('');
      const [image, setImage] = useState<File | null>(null);

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
      if (event.target.files && event.target.files[0]){
            setImage(event.target.files[0]);
            // setUrlImage(event.target.files[0])
      }
      }
      const handleUpload = () => {
            if (image)  {
                  const storageRef = ref(storage, `banners/${image.name}`);
                  const uploadTask = uploadBytesResumable(storageRef, image);
                  uploadTask.on(
                        "state_changed",
                        (snapshot:UploadTaskSnapshot) => {
                        const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(`upload is ${progress}% done`)
                        },
                        error => {
                              console.log(error.message)
                        },
                        () => {
                              console.log("upload selesai")
                        }
                  )
            }
      }
  return (
      <div className='w-full h-screen flex items-center justify-start flex-col space-y-3 mt-[100px]'>       
                              <div className="flex items-center justify-center w-[60%]">
                              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-white border-4 border-gray-300 border-dashed rounded-lg cursor-pointer">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                          <LuUploadCloud className='text-gray-300 text-7xl' />
                                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="inline" onChange={handleChange} />
                              </label>
                              </div> 
                              {/* button */}
                              <button onClick={handleUpload} className='text-white px-5 py-2 rounded-lg bg-blue-400 border-0 outline-0'>
                                    submit
                              </button>
                        </div>
    
  )
}

export default AddPhotoStruktur