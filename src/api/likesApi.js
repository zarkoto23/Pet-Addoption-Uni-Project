import { useUserContext } from "../contexts/UserContext";
import requester from "../utils/requester";

const baseLikeUrl = "http://localhost:3030/data/likes";

export const useLike = () => {
  const { accessToken } = useUserContext();

  const like = async (userId, petId) => {
    const res = await requester.get(
      `${baseLikeUrl}?where=_ownerId%3D%22${userId}%22%20and%20petId%3D%22${petId}%22`
    );
    console.log(res);
    if (res.length > 0) {
      return;
    }

    const postRes = await requester.post(
      baseLikeUrl,
      {
        _ownerId: userId,
        petId: petId,
      },
      { headers: { "X-Authorization": accessToken } }
    );
  };

  return {
    like,
  };
};



// http://localhost:3030/data/likes?where=petId%3D"ee3ddf64-5d3a-4c13-abe8-fde1ee2afefb"
