import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import requester from "../utils/requester";
import { useCallback } from "react";

const baseLikeUrl = `${import.meta.env.VITE_APP_SERVER_URL}/likes`

export const useLike = () => {
  const { accessToken } = useUserContext();
  const getPetLikes = useCallback(async (petId) => {
    try {
      const result = await requester.get(
        `${baseLikeUrl}?where=petId%3D%22${petId}%22`
      );
      return result;
    } catch (err) {
      return [];
    }
  }, []);

  const like = async (userId, petId) => {
    try {
      const res = await requester.get(
        `${baseLikeUrl}?where=_ownerId%3D%22${userId}%22%20and%20petId%3D%22${petId}%22`
      );

      if (res.length > 0) {
        const likeId = res[0]._id;
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
  };

  const getPetLikesByUser = useCallback(async (userId) => {
    const likes = await requester.get(
      `${baseLikeUrl}?where=_ownerId%3D%22${userId}%22`
    );

    return likes;
  }, []);

  return {
    like,
    getPetLikes,
    getPetLikesByUser,
  };
};
