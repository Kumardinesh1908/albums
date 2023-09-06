import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const UpdateAlbumButton = ({ albumId, albums, setAlbums }) => {

    const [selectedUpdatedAlbum, setSelectedUpdatedAlbum] = useState(false); // State for controlling the update panel
    const [updatedAlbumTitle, setUpdatedAlbumTitle] = useState(''); // State for storing the updated album title

    // Function to handle update album and make a PUT request to an API.
    const updateAlbum = () => {
        if (updatedAlbumTitle !== "") {
            axios.put(`https://jsonplaceholder.typicode.com/albums/${albumId}`,
                { title: updatedAlbumTitle, }
            )
                .then(response => {
                    // Update the albums array with the new title
                    const updatedAlbums = albums.map(album =>
                        album.id === albumId ? { ...album, title: updatedAlbumTitle } : album
                    );
                    setAlbums(updatedAlbums);
                    setSelectedUpdatedAlbum(false);
                    setUpdatedAlbumTitle('');
                })
                .catch(error => {
                    alert('Error updating album:', error);
                });
        }
        else{
            alert("Please write something in input box to update an item.");
      }
    };

    // Ref for the updateAlbumButton panel
    const updateAlbumRef = useRef(null);

    // Effect to close the update panel that appears when selectedUpdatedAlbum is true when clicking outside of the box
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(updateAlbumRef.current)) {
                setSelectedUpdatedAlbum(false);
                setUpdatedAlbumTitle('');
            };
        })
    }, [updateAlbumRef])

    return (
        <div>
            {/* Button to toggle the update panel */}
            <button
                onClick={() => setSelectedUpdatedAlbum(!selectedUpdatedAlbum)}
                className="bg-green-500 hover:bg-white font-semibold text-white hover:text-green-500 px-2 py-1 rounded border hover:border-green-500"
            >Update</button>

            {selectedUpdatedAlbum &&
                // The update panel that appears when selectedUpdatedAlbum is true
                <div className='w-screen h-screen fixed z-50 top-0 left-0 flex items-center justify-center'
                    style={{ background: 'linear-gradient(135deg,#ff6b6b, #3a1c71)' }}>
                    <div ref={updateAlbumRef} className=" w-[25%] rounded-lg "
                        style={{ background: 'linear-gradient(135deg, #a0d8eb, #e8eff3,#ffffb3, #ffe066)' }}>

                        <div className='p-3 flex flex-col gap-8'>
                            <div>
                                <p className='text-xl font-semibold mb-3'>Update Album</p>

                                {/* Input for the updated title */}
                                <input
                                    type="text"
                                    placeholder="Updated title"
                                    value={updatedAlbumTitle}
                                    onChange={event => setUpdatedAlbumTitle(event.target.value)}
                                    className="border rounded px-2 py-1 w-full"
                                />
                            </div>

                            <div className='w-full flex justify-between   items-center'>

                                {/* Update button */}
                                <button
                                    onClick={updateAlbum}
                                    className="bg-green-500 hover:bg-white font-semibold text-white hover:text-green-500 px-2 py-1 rounded border hover:border-green-500"
                                >Update</button>

                                {/* Cancel button */}
                                <button
                                    onClick={() => { setSelectedUpdatedAlbum(!selectedUpdatedAlbum); setUpdatedAlbumTitle("") }}
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

export default UpdateAlbumButton;
