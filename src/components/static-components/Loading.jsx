export default function Loading() {

console.log('loagind...');

  return(
     <div className="flex justify-center items-center h-screen">
      <div className="spinner-border text-indigo-500/80" role="status">
        <span className="visually-hidden text-4xl">Loading...</span>
      </div>
    </div>
    
)
}