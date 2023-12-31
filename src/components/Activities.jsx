import CardActivities from "./CardActivities";
import { useState, useEffect } from "react";
import activity_actions from "../store/actions/activities";
import { useDispatch } from "react-redux";


const { read_activities } = activity_actions;

export default function Activities({ p_activities }) {
   const [activities, setActivity] = useState([]);
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(read_activities({ itinerary_id: p_activities }))
     .then(response => setActivity(response.payload.activities))
     .catch(err => console.log(err))
   }, []);
   //const activities = useSelector((store) => store.activities.activities);
  return (
    <>
       {activities.length ===0  ? (
            <div className="bg-notFound-activities" >
              <div className="row">
                <p className="message-activities">
                  Oops! There are no activities for the selected itinerary
                </p>
              </div>
            </div>
            ) : (
            activities.map((each,index) => (
              <CardActivities
                key={index}
                photo={each.photo}
                name={each.name}
                id={each._id}
              />
            ))
        )}
    </>
  );
}
