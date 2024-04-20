import axios from "axios";

export default async function useEventsQuery() {
  const res = await axios.get(`${process.env.BACKEND_URL}/api/event`);
  return res.data;
}
