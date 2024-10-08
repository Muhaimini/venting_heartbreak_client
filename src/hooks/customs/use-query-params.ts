import { useParams } from "next/navigation";
import { overrideType } from "~/helper";

const useQueryParams = () => {
  const params = useParams();
  return overrideType<Record<string, string>>(params);
};

export default useQueryParams;
