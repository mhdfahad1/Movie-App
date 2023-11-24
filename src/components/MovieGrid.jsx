import { createRef, useRef, useState } from "react";
import Details from "./Details";

function MovieGrid({ results }) {
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState({});
    
    const showDetails = (index)=>{
        setMovie(results[index])
        setIsOpen(true)
    }


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            
            {results.length > 0 ? results.map(({ id,
                poster_path,
                original_title,
                release_date,
                overview },index) => (
                <div
                    className="bg-gray-600 p-2 rounded-lg movie-item"
                    key={id}>
                    <img className="md:w-[300px] w-[150px] md:h-[380px] h-[200px] md:ml-0 ml-3" src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} />
                    <div className='font-bold text-white mt-2 md:ml-0 ml-3'>{original_title}</div>
                    <div className='text-gray-400 md:ml-0 ml-3 '>{release_date}</div>
                    <div className='text-gray-400 md:ml-0 ml-3 h-6 overflow-ellipsis overflow-clip'>
                        {overview.slice(0,30)+'....'}
                    </div>
                    <button className="bg-green-400 p-2 rounded-lg text-center mt-2 md:w-full font-bold w-full" onClick={() => showDetails(index)}>
                        Details
                    </button>

                </div>
            )
            ):<>

                <div>No result found</div>
            
            </>}
            {isOpen && <Details setOpenModal={setIsOpen} movie={movie}/>}
                                                                
        </div>

    );
}

export default MovieGrid;