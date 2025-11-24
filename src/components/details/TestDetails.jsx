// import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { usePet, useDelete } from "../../api/petsApi";
// import { useContext, useEffect, useState, startTransition, useOptimistic } from "react";
// import { UserContext } from "../../contexts/UserContext";
// import { useLike } from "../../api/likesApi";
// import { useCarousel } from "../../contexts/CarouselContext";
// import Loading from "../static-components/Loading";

// export default function Details() {
//     const { setIsReturningFromDetails } = useCarousel();
//     const { accessToken, _id } = useContext(UserContext);

//     const navigate = useNavigate();
//     const location = useLocation();

//     const { del } = useDelete();
//     const { like, getPetLikes } = useLike();
//     const { petId } = useParams();
//     const pet = usePet(petId);

//     const [showAll, setShowAll] = useState(false);

//     // REAL SERVER VALUES
//     const [realLikes, setRealLikes] = useState(0);
//     const [realIsLiked, setRealIsLiked] = useState(false);

//     // OPTIMISTIC UI STATE (React useOptimistic)
//     const [optimistic, updateOptimistic] = useOptimistic({ likes: null, isLiked: null }, (prev, next) => ({
//         ...prev,
//         ...next,
//     }));

//     // LOCAL synchronous override to guarantee immediate UI feedback
//     // This is cleared once server response arrives (or optimistic cleared).
//     const [localDisplay, setLocalDisplay] = useState({ likes: null, isLiked: null });

//     const isOwner = _id === pet._ownerId;

//     // FETCH REAL LIKE DATA (initial load and when petId/_id changes)
//     useEffect(() => {
//         let mounted = true;
//         getPetLikes(petId).then((result) => {
//             if (!mounted) return;
//             const count = result.length;
//             const liked = result.some((l) => l._ownerId === _id);

//             setRealLikes(count);
//             setRealIsLiked(liked);

//             startTransition(() => {
//                 updateOptimistic({ likes: null, isLiked: null });
//             });

//             // clear optimistic state so the UI falls back to real values
//             // clear any local immediate override as well
//             setLocalDisplay({ likes: null, isLiked: null });
//         });

//         return () => {
//             mounted = false;
//         };
//     }, [petId, _id, getPetLikes, updateOptimistic]);

//     // DISPLAY computed: localDisplay -> optimistic -> real
//     const displayedLikes =
//         localDisplay.likes !== null ? localDisplay.likes : optimistic.likes !== null ? optimistic.likes : realLikes;

//     const displayedIsLiked =
//         localDisplay.isLiked !== null
//             ? localDisplay.isLiked
//             : optimistic.isLiked !== null
//             ? optimistic.isLiked
//             : realIsLiked;

//     // LIKE BUTTON HANDLER — immediate local update + react-19-compliant optimistic
//     const onLikeHandler = async () => {
//         // compute change
//         const change = displayedIsLiked ? -1 : 1;
//         const newIsLiked = !displayedIsLiked;
//         const newLikes = displayedLikes + change;

//         // 0) Synchronously show immediate local feedback (guaranteed)
//         // This ensures instant UI even if startTransition is delayed.
//         setLocalDisplay({ likes: newLikes, isLiked: newIsLiked });

//         // 1) Also update the React optimistic state inside a transition (required in React 19)
//         startTransition(() => {
//             updateOptimistic({ likes: newLikes, isLiked: newIsLiked });
//         });

//         // 2) Send request to server
//         // Note: don't block the synchronous UI by awaiting anything before the local update above.
//         const action = await like(_id, petId);

//         // 3) Apply server-confirmed values to "real" state
//         if (action === "added") {
//             // use functional updates to be safe with concurrent renders
//             setRealLikes((prev) => prev + (newIsLiked && !realIsLiked ? 1 : 0));
//             setRealIsLiked(true);
//         } else if (action === "removed") {
//             setRealLikes((prev) => prev - (!newIsLiked && realIsLiked ? 1 : 0));
//             setRealIsLiked(false);
//         } else {
//             // If backend returns something else, refetch or reconcile.
//             // For simplicity, we'll re-fetch the authoritative count:
//             const result = await getPetLikes(petId);
//             setRealLikes(result.length);
//             setRealIsLiked(result.some((l) => l._ownerId === _id));
//         }

//         // 4) Clear optimistic and local override (so UI falls back to server values)
//         // We clear optimistic via updateOptimistic (allowed outside transition too).
//         updateOptimistic({ likes: null, isLiked: null });
//         setLocalDisplay({ likes: null, isLiked: null });
//     };

//     const onCloseHandler = () => {
//         setIsReturningFromDetails(true);

//         if (location.state?.from === "catalog") navigate("/catalog");
//         else if (location.state?.from === "profile") navigate("/profile");
//         else if (location.state?.from === "edit") navigate(`/catalog/details/${petId}`);
//         else navigate("/catalog");
//     };

//     const onEditHandled = () => navigate("/edit", { state: { pet } });

//     const onDeleteHandler = async () => {
//         if (!confirm("Sure you want to delete this?")) return;
//         await del(petId);
//         navigate(location.state?.from === "profile" ? "/profile" : "/catalog");
//     };

//     if (Object.keys(pet).length === 0) return <Loading />;

//     return (
//         <div
//             type="button"
//             onClick={onCloseHandler}
//             className="fade-in-up fixed inset-0 flex items-center justify-center bg-black/50 z-50"
//         >
//             <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="relative flex flex-col md:flex-row max-w-5xl w-full h-[700px] bg-gradient-to-br from-indigo-300/60 via-purple-200/60 to-pink-200/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-transform"
//             >
//                 {/* CLOSE BUTTON */}
//                 <button
//                     type="button"
//                     onClick={onCloseHandler}
//                     className="absolute top-4 right-4 bg-white/30 backdrop-blur-md text-black font-bold text-xl w-10 h-10 rounded-full shadow-md hover:bg-indigo-100/60 hover:text-indigo-700 transition-all flex items-center justify-center z-10"
//                 >
//                     ✕
//                 </button>

//                 {/* LEFT: IMAGE */}
//                 <div className="md:w-1/2 w-full h-full overflow-hidden flex items-center justify-center bg-white/20">
//                     <img
//                         src={pet.imageUrl}
//                         alt={pet.name}
//                         className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
//                     />
//                 </div>

//                 {/* RIGHT: DETAILS */}
//                 <div className="bg-gradient-to-r from-indigo-300/90 via-purple-300/90 to-pink-200/90 flex-1 p-8 flex flex-col justify-start h-full overflow-y-auto">
//                     <h2 className="text-4xl text-gray-800 mb-6">
//                         <span>Name:</span> <span className="text-indigo-600 font-bold">{pet.name}</span>
//                     </h2>

//                     {/* PET INFO */}
//                     <div className="grid grid-cols-2 gap-8 text-gray-700">
//                         <p>
//                             <span className="font-semibold text-gray-800">Category:</span>{" "}
//                             <span className="text-indigo-600">{pet.category}</span>
//                         </p>
//                         <p>
//                             <span className="font-semibold text-gray-800">Gender:</span>{" "}
//                             <span className="text-indigo-600">{pet.gender}</span>
//                         </p>
//                         <p>
//                             <span className="font-semibold text-gray-800">Castrated:</span>{" "}
//                             <span className="text-indigo-600">{pet.castrated}</span>
//                         </p>
//                         <p>
//                             <span className="font-semibold text-gray-800">Age:</span>{" "}
//                             <span className="text-indigo-600">
//                                 {pet.years}y {pet.months}m
//                             </span>
//                         </p>
//                     </div>

//                     {/* DESCRIPTION */}
//                     <div className="leading-relaxed w-full mt-8">
//                         <p className="font-semibold text-gray-800 mb-2">Description:</p>
//                         <p
//                             className={`text-indigo-600 whitespace-pre-line break-words ${
//                                 showAll ? "line-clamp-none" : "line-clamp-1"
//                             }`}
//                         >
//                             {pet.description}
//                         </p>
//                     </div>

//                     {pet.description.length > 20 && (
//                         <button onClick={() => setShowAll((prev) => !prev)} className="text-gray-800 text-sm mt-2 underline">
//                             {showAll ? "show less..." : "...show more"}
//                         </button>
//                     )}

//                     {/* LIKES DISPLAY */}
//                     <div className="grid grid-cols-2 gap-8 text-gray-700 mt-8">
//                         <div>
//                             <p className="font-semibold text-gray-800 mb-2">Likes:</p>
//                             <p className="text-indigo-600">{displayedLikes}</p>
//                         </div>
//                     </div>

//                     {/* LIKE BUTTON */}
//                     {!isOwner && accessToken && (
//                         <div className="mt-8">
//                             <button onClick={onLikeHandler} className="bg-transparent border-none">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     strokeWidth="2"
//                                     stroke="currentColor"
//                                     className={`w-14 h-14 cursor-pointer transition-all hover:scale-110 ${
//                                         displayedIsLiked ? "stroke-red-600 fill-red-600" : "stroke-gray-700"
//                                     }`}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M12 21s-6.5-4.3-9-7.9C-1.5 7.7 3.1 2 7.5 4.5 9.3 5.5 12 8 12 8s2.7-2.5 4.5-3.5C20.9 2 25.5 7.7 21 13.1c-2.5 3.6-9 7.9-9 7.9z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     )}

//                     {/* OWNER ACTIONS */}
//                     {isOwner && (
//                         <>
//                             <div className="mt-6 flex flex-col items-center ml-5 bg-gray-300 rounded-2xl shadow-lg h-16 w-100">
//                                 <button
//                                     onClick={onEditHandled}
//                                     className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 mt-3 rounded-md w-40"
//                                 >
//                                     Edit
//                                 </button>
//                             </div>
//                             <div className="mt-4 flex flex-col items-center ml-4 bg-gray-300 rounded-2xl shadow-lg h-16 w-100">
//                                 <button
//                                     onClick={onDeleteHandler}
//                                     className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 mt-3 mb-32 rounded-md w-40"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }