import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_carousel = createAsyncThunk(
    'read_carousel',    //nombre de la accion
    async()=> {         //callback que realiza la petición
        try {
            let data = await axios(apiUrl+'cities/carousel')
            //console.log(data);
            return { carousel: data.data.data_carousel } //data_carousel viene del back
        } catch (err) {
            console.log(err);
            return {
                 carousel: [] 
            }
        }
    }
)
const read_cities = createAsyncThunk(
    'read_cities',
    async(obj)=> {
        try{
            let data =await axios(apiUrl+'cities?city='+obj.text)
            //console.log('dato recibido desde axios: ',data)
            return{
                cities: data.data.response
            }
        }catch(err){
            console.log(err)
            throw err; // Lanzar el error para que pueda ser manejado en el reducer
        }
    }
)
const read_city = createAsyncThunk(
    'read_city',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'cities/'+obj.id)
            return { city: data.data.response }
        } catch (error) {
            console.log(error);
            return { city: {} }
        }
    }
)
const cities_actions = {read_carousel, read_cities, read_city}
export default cities_actions