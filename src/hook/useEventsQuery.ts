import axios from "axios";

export default async function useEventsQuery() {
  const res = await axios.get(`http://localhost:3000/api/event`);
  return res.data;
}
