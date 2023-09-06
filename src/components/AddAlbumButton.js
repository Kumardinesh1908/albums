import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';


const AddAlbumButton = ({ albums, setAlbums }) => {

      const [selectedAddAlbum, setSelectedAddAlbum] = useState(false); // State for controlling the add panel
      const [newAlbumTitle, setNewAlbumTitle] = useState(''); // State for storing the new album title

      // Function to add a new album to the list and make a POST request to an API.
      const addAlbum = () => {
            if (newAlbumTitle !== '') {
                  axios.post('https://jsonplaceholder.typicode.com/album', { title: newAlbumTitle })
                        .then(response => {
                              // Update the albums list with the new album data.
                              setAlbums([...albums, response.data]);
                              setNewAlbumTitle('');
                              setSelectedAddAlbum(false);
                        })
                        .catch(error => {
                              alert('Error adding album : ' + error.message);
                        });
            }
            else{
                  alert("Please write something in input box to add an item.");
            }
      };

      // Ref for the addAlbumButton panel
      const addAlbumRef = useRef(null);

      // Effect to close the add panel that appears when selectedAddAlbum is true when clicking outside of the box
      useEffect(() => {
            document.body.addEventListener("click", (e) => {
                  if (e.target.contains(addAlbumRef.current)) {
                        setSelectedAddAlbum(false);
                        setNewAlbumTitle('');
                  };
            })
      }, [addAlbumRef])

      return (
            <div>
                  {/* Button to toggle the add panel */}
                  <button
                        onClick={() => setSelectedAddAlbum(!selectedAddAlbum)}
                        className="bg-[#fc4f4f] hover:bg-white text-white hover:text-[#fc4f4f] px-5 py-1 text-2xl font-semibold rounded "
                  >Add Album</button>

                  {selectedAddAlbum &&
                        // The add panel that appears when selectedAddAlbum is true
                        <div className='w-screen h-screen fixed z-50 top-0 left-0 flex items-center justify-center'
                              style={{ background: 'linear-gradient(135deg,#ff6b6b, #3a1c71)' }}>
                              <div ref={addAlbumRef} className=" w-[25%] rounded-lg "
                                    style={{ background: 'linear-gradient(135deg, #a0d8eb, #e8eff3,#ffffb3, #ffe066)' }}>

                                    <div className='p-3 flex flex-col gap-8'>
                                          <div>
                                                <p className='text-xl font-semibold mb-3'>Add new Item in the Album</p>

                                                {/* Input for the new title */}
                                                <input
                                                      type="text"
                                                      placeholder="Album title"
                                                      value={newAlbumTitle}
                                                      onChange={event => setNewAlbumTitle(event.target.value)}
                                                      className="border rounded px-2 py-1 w-full"
                                                />
                                          </div>

                                          <div className='w-full flex justify-between items-center'>

                                                {/* Add button */}
                                                <button
                                                      onClick={addAlbum}
                                                      className="bg-green-500 hover:bg-white font-semibold text-white hover:text-green-500 px-5 py-1 rounded border hover:border-green-500"
                                                >Add</button>

                                                {/* Cancel button */}
                                                <button
                                                      onClick={() => { setSelectedAddAlbum(!selectedAddAlbum); setNewAlbumTitle("") }}
                                                      className="bg-red-600 hover:bg-white font-semibold text-white hover:text-red-600 px-2 py-1 rounded border hover:border-red-600"
                                                >Cancel</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  }
            </div>
      );
}

export default AddAlbumButton;
