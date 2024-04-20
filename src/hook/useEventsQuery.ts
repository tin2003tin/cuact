import axios from "axios";

export default async function useEventsQuery() {
  const res = await axios.get(`https://cuact.vercel.app/api/event`);
  return res.data;
}
