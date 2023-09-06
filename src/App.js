
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import AddAlbumButton from './components/AddAlbumButton';
import UpdateAlbumButton from './components/UpdateAlbumButton';

function App() {
  const [albums, setAlbums] = useState([]);  // State to hold the list of albums

  // Fetch albums when the component mounts
  useEffect(() => {
    fetchAlbums();
  }, []);

  // Function to Fetch albums using a PUT request to the API and update albums state
  const fetchAlbums = () => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        alert('Error fetching albums : ' + error.message);
      });
  };

  // Function to handle delete album and make a DELETE request to an API.
  const deleteAlbum = (albumId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then(() => {
        // Update the albums list by filtering out the deleted album
        const updatedAlbums = albums.filter(album => album.id !== albumId);
        setAlbums(updatedAlbums);
      })
      .catch(error => {
        alert('Error deleting album : ' + error.message);
      });
  };

  return (
    <div className="">
      {/* Header Section*/}
      <header className='w-full h-20 flex flex-row items-center justify-between px-10 sticky top-0 z-50'
        style={{ background: 'linear-gradient(135deg,#ff6b6b, #3a1c71)' }}>
        <h1 className="text-4xl text-white font-semibold  ">Albums List</h1>

        {/* Component to add new albums */}
        <AddAlbumButton albums={albums} setAlbums={setAlbums} />
      </header>

      {/* Albums List */}
      <ul className='flex flex-row flex-wrap py-6'>

        {/* Map through albums and render each one */}
        {albums.map(album => (
          <li key={album.id} className="border rounded my-5 mx-5 w-[22%] h-40 relative overflow-y-hidden"
            style={{ background: 'linear-gradient(135deg, #a0d8eb, #e8eff3,#ffffb3, #ffe066)' }}>
            
            {/* Album title */}
            <div className='flex justify-center p-3 text-base font-semibold capitalize'>{album.title}</div>

            <div className='w-[100%] flex justify-between p-3  items-center absolute bottom-3'>

              {/* Component to update album */}
              <UpdateAlbumButton albumId={album.id} albums={albums} setAlbums={setAlbums} />

              {/* Delete button */}
              <button onClick={() => deleteAlbum(album.id)} className="bg-red-600 hover:bg-white font-semibold text-white hover:text-red-600 px-2 py-1 rounded border hover:border-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
