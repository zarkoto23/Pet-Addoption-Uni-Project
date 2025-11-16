import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import requester from "../utils/requester";
import { useCallback, useState } from "react";
import { usePet } from "./petsApi";

const baseLikeUrl = "http://localhost:3030/data/likes";

export const useLike = () => {
  const { accessToken,_id } = useUserContext();
  const getPetLikes = useCallback(async (petId) => {
    try {
      const result = await requester.get(
        `${baseLikeUrl}?where=petId%3D%22${petId}%22`
      );
      return result;
    } catch (err) {
      toast.error(err.message);
      return [];
    }
  }, []);

  const like =
    async (userId, petId) => {
      try {
        const res = await requester.get(
          `${baseLikeUrl}?where=_ownerId%3D%22${userId}%22%20and%20petId%3D%22${petId}%22`
        );

        if (res.length > 0) {
          const likeId=res[0]._id
          await requester.del(`${baseLikeUrl}/${likeId}`, {
            headers: { "X-Authorization": accessToken },
          });
          return "removed";
        }



        await requester.post(
          baseLikeUrl,
          {
            _ownerId: userId,
            petId: petId,
          },
          { headers: { "X-Authorization": accessToken } }
        );

        return "added";
      } catch (err) {
        toast.error(err.message);
      }
    }


const getPetLikesByUser = async (userId) => {
    const likes = await requester.get(
        `${baseLikeUrl}?where=_ownerId%3D%22${userId}%22`
    );

    const pets = await Promise.all(
        likes.map(like =>
            requester.get(`http://localhost:3030/data/pets/${like.petId}`)
        )
    );

    return pets;
};




 

  return {
    like,
    getPetLikes,
    getPetLikesByUser
  };
};
