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
  const navigate=useNavigate()

  const del = async (petId) => {
    try {
      await requester.del(`${petsUrl}/${petId}`, {
        headers: { "X-Authorization": accessToken },
      });
      toast.success("Successfull deleted!");
      navigate(-1)
    } catch (err) {
      toast.error(err.message);
    }
  };

  return {
    del,
  };
};
