import {useQuery} from "@tanstack/react-query";
import {CategoryService} from "@/services/category.service";


export const useCategories = () => {
   const getAll = () => useQuery({
    queryKey: ['categories'],
    queryFn: () => CategoryService.getAll(),
  });

    return { getAll }
};