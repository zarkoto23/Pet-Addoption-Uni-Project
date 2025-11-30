
import { useContext, useEffect, useState } from "react";
import requester from "../utils/requester";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useLike } from "./likesApi";

const petsUrl =`${import.meta.env.VITE_APP_SERVER_URL}/data/pets`

export const usePets = (filters) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)

  const cleaned = Object.fromEntries(
    Object.entries(filters || {}).filter(([_, v]) => v !== "")
  );

  const hasFilters = Object.keys(cleaned).length > 0;

  let url = `${petsUrl}?sortBy=_createdOn desc`;

  if (hasFilters) {
    const where = Object.entries(cleaned)
      .map(([k, v]) => `${k}="${v}"`)
      .join(" AND ");

    const encoded = encodeURIComponent(where);

    url = `${petsUrl}?where=${encoded}`;
  }


  requester
    .get(url)
    .then(data=>{
      setPets(data)
    setLoading(false)
    }
    )
    .catch(err => toast.error(err.message));

    
  }, [filters]);
  

  return { pets ,loading };
};

export const usePet = (petId) => {
  const [pet, setPet] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    requester
      .get(`${petsUrl}/${petId}`)
      .then(setPet)
      .catch((err) => {
        toast.error(err.message || "Something went wrong");
        navigate("/");
      });
  }, [petId, navigate]);

  return pet;
};

export const useCreate = () => {
  const { accessToken } = useContext(UserContext);

  const create = async (data) => {
    try {
      const result = await requester.post(petsUrl, data, {
        headers: { "X-Authorization": accessToken },
      });
      toast.success("Record successfully created!");
      return result;
    } catch (err) {
      toast.error(err.message);
    }
  };
  return {
    create,
  };
};

export const useMyPets = () => {
  const { _id, accessToken } = useContext(UserContext);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    requester
      .get(`${petsUrl}?where=_ownerId%3D%22${_id}%22`, {
        headers: { "X-Authorization": accessToken },
      })
      .then(setMyPets)
      .catch((err) => {
        toast.error(err.message);
      });
  }, [_id, accessToken]);

  return {
    myPets,
  };
};

export const useMyLikedPets = () => {
  const [loading, setLoading] = useState(true);
  const { getPetLikesByUser } = useLike();
  const { _id } = useContext(UserContext);

  const [likedPets, setLikedPets] = useState([]);

  useEffect(() => {
    setLoading(true);

    const load = async () => {
      const likes = await getPetLikesByUser(_id);

      const pets = await Promise.all(
        likes.map((like) =>
          requester.get(`${petsUrl}/${like.petId}`)
        )
      );

      setLikedPets(pets);
      setLoading(false);
    };

    load();
  }, [_id, getPetLikesByUser]);

  return { likedPets, loading };
};

export const useUpdate = () => {
  const { accessToken } = useContext(UserContext);

  const update = async (data) => {
    try {
      const result = await requester.put(`${petsUrl}/${data._id}`, data, {
        headers: { "X-Authorization": accessToken },
      });
      toast.success("Successfull update!");
      return result;
    } catch (err) {
      toast.err(err.message);
    }
  };

  return {
    update,
  };
};

export const useDelete = () => {
  const { accessToken } = useContext(UserContext);

  const del = async (petId) => {
    try {
      await requester.del(`${petsUrl}/${petId}`, {
        headers: { "X-Authorization": accessToken },
      });
      toast.success("Successfull deleted!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return {
    del,
  };
};
