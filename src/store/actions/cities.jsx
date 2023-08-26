import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_carousel = createAsyncThunk(
    'read_carousel',    //nombre de la accion
    async()=> {         //callback que realiza la petición
        try {
            let data = await axios(apiUrl+'cities/carousel')
            console.log(data);
            return { carousel: data.data.data_carousel } //data_carousel viene del back
        } catch (err) {
            console.log(err);
            return {
                 carousel: [] 
            }
        }
    }
)

const cities_actions = {read_carousel}
export default cities_actions