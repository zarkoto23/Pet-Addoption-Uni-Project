import { useContext, useEffect, useState } from "react";
import requester from "../utils/requester";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const petsUrl = "http://localhost:3030/data/pets";

export const usePets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requester
      .get(petsUrl)
      .then(setPets)
      .catch((err) => {
        toast.error(err.message || "Something went wrong!");
        navigate("/");
      });
  }, [navigate]);

  return { pets };
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

  const create = (data) => {
    requester.post(petsUrl, data, {
      headers: { "X-Authorization": accessToken },
    });
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

  console.log(myPets);
  

  return {
    myPets,
  };
};

// GET /data/comments   ?where=recipeId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22
