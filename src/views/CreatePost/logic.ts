import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/api/post";



const useLogic = () => {
  const navigate = useNavigate();
  const handleCreate = useCallback(
  async (values: {
      name: string;
      type: string;
      model: string;
      plateNumber: string;
      km: number;
      carSeats: number;
      fuelType: string;
      gearBoxType: string;
      description: string;
      style: string;
      status: string;
      availableTimes: string;
    }) => {
      try {
        await createPost(values);
      } catch (error) {
        console.error(error);
      }
    },
    [navigate]
  );

  return { handleCreate };
};

export default useLogic;

