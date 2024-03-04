"use client"
import React, {useState, ChangeEvent} from 'react'

import { LuUploadCloud } from "react-icons/lu";
import { Input, Text } from '@chakra-ui/react';
import { storage } from '../../firebase';
import  {ref,   uploadBytesResumable, UploadTaskSnapshot} from 'firebase/storage'
import Image from 'next/image';
function AddPhotoBanner() {
      const [value, setValue] = useState<string>('');
      const [image, setImage] = useState<File | null>(null);
      const [urlImage, setUrlImage] = useState<string | ArrayBuffer | null>("");

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
      if (event.target.files && event.target.files[0]){
            setImage(event.target.files[0]);
            // setUrlImage(event.target.files[0])
      }
      const file = event.target.files?.[0]
      if (file) {
            const reader = new FileReader();
            reader.onload = () => {
            setUrlImage(reader.result);
            };
            reader.readAsDataURL(file);
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
      <div className='w-full h-screen flex items-center justify-start flex-col space-y-3'>       
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
                              {/* heading */}
                              <div className='bg-white w-[60%] h-[100px] rounded-lg px-4 py-1'>
                                    <Text mb='8px' className='text-2xl '>title</Text>
                                    <Input
                                    value={value}
                                    onChange={handleChange}
                                    placeholder='Tambah Judul untuk Banner..'
                                    size='sm'
                                    className='bg-transparent font-semibold placeholder:text-gray-300 h-[50px] w-full ring-0 outline-0 border-0 text-xl'
                                    />
                              </div>
                              {/* preview */}
                              <div className='w-[60%] flex flex-col space-y-4'>
                                    <h1 className='text-2xl'>preview</h1>
                                    <div className='relative bg-white w-full h-64 rounded-lg flex items-center justify-center'>
                                          {urlImage? (
                                                <Image alt='set' src={urlImage.toString()} className='absolute top-0 left-0 bg-gray-300 rounded-lg w-full h-full z-10' />

                                          ) : (
                                                <div></div>
                                          )}
                                          <h1 className='font-extrabold text-2xl z-30 w-[55%] text-center'>{value}</h1>
                                    </div>
                              </div>
                              {/* button */}
                              <button onClick={handleUpload} className='text-white px-5 py-4 bg-blue-400 border-0 outline-0'>
                                    submit
                              </button>
                        </div>
    
  )
}

export default AddPhotoBanner