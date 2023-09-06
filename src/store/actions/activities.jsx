import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_activities = createAsyncThunk(
    'read_activities',
    async(obj)=> {
        try {
           // console.log(' en el actions de activi -', obj.itinerary_id)
            //let id = obj.itinerary_id.itinerary_id
            let data = await axios(apiUrl+'activities/'+obj.id)
            console.log(data.data.response);
            return { activities: data.data.response }
        } catch (error) {
            console.log(error);
            throw err;
        }
    }
)

const activity_actions = {read_activities }
export default activity_actions