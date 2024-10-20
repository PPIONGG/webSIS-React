import { useParams } from "react-router-dom";

export function useDeliveryParams() {
  const { month, day, model, address } = useParams<{
    month?: string;
    day?: string;
    model?: string;
    address?: string;
  }>();

  return { month, day, model, address };
}
