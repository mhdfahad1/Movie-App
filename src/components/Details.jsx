function Details({ setOpenModal, movie }) {

  return (
      <div className="flex justify-center">
              <div className=' w-[600px] z-10 h-[200px] flex  fixed top-20 ml-[800px]' onClick={() => setOpenModal(false)}>
                  <div className='absolute w-full flex justify-center items-center z-30 '>
                      <div className=" bg-black/80 p-6 rounded-lg ">
                          <div >
                              <div className='text-white font-bold text-3xl'>
                                  {movie.original_title}
                              </div>
                              <div className="flex gap-4 mt-4">
                                  <div>
                                      <div > {movie.original_language} </div>
                                      <div > {movie.origin_country} </div>
                                      <div className='text-white/40 w-[300px]'> {movie.overview} </div>
                                  </div>
                                  <div><img width='200' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title} /></div>
                              </div>



                              <button className="bg-red-400 p-2 rounded-lg text-center mt-10" onClick={() => setOpenModal(false)}>
                                  Close
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
  );
}

export default Details;