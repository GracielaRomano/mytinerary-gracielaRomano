import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_itineraries = createAsyncThunk(
    'read_itineraries',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'itineraries?city_id='+obj.city_id)
            console.log(data);
            return { 
                itineraries: data.data.response
            }
        } catch (error) {
            console.log(error);
            throw err;
        }
    }
)

const itinerary_actions = {read_itineraries }
export default itinerary_actions